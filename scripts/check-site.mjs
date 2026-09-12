import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

export function inspectHtml(html) {
  const result = { ids: new Set(), links: [], assets: [], schemas: [], errors: [], h1: 0, canonical: [], noindex: false };
  function walk(node) {
    const attrs = Object.fromEntries((node.attrs ?? []).map(({ name, value }) => [name, value]));
    if (attrs.id) {
      if (result.ids.has(attrs.id)) result.errors.push(`duplicate id: ${attrs.id}`);
      result.ids.add(attrs.id);
    }
    if (node.tagName === 'h1') result.h1 += 1;
    if (node.tagName === 'a' && attrs.href) result.links.push(attrs.href);
    if (['img', 'script'].includes(node.tagName) && attrs.src) result.assets.push(attrs.src);
    if (node.tagName === 'link' && attrs.rel === 'canonical') result.canonical.push(attrs.href);
    if (node.tagName === 'meta' && attrs.name === 'robots' && /noindex/i.test(attrs.content)) result.noindex = true;
    if (node.tagName === 'script' && attrs.type === 'application/ld+json') {
      try {
        const schema = JSON.parse((node.childNodes ?? []).map((child) => child.value ?? '').join(''));
        result.schemas.push(...(Array.isArray(schema) ? schema : [schema]));
      } catch {
        result.errors.push('invalid JSON-LD');
      }
    }
    for (const child of node.childNodes ?? []) walk(child);
  }
  walk(parse(html));
  return result;
}

export function auditSite(directory, site = 'https://blog.glasgow.works') {
  const root = resolve(directory);
  const pages = new Map();
  const errors = [];
  function readPages(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) readPages(path);
      else if (entry.name.endsWith('.html')) {
        let route = `/${relative(root, path).replaceAll('\\', '/')}`;
        if (route.endsWith('/index.html')) route = route.slice(0, -10);
        pages.set(route, inspectHtml(readFileSync(path, 'utf8')));
      }
    }
  }
  readPages(root);
  const redirects = new Map();
  const redirectFile = join(root, '_redirects');
  if (existsSync(redirectFile)) {
    for (const line of readFileSync(redirectFile, 'utf8').split('\n')) {
      const [from, to, code] = line.trim().split(/\s+/);
      if (from && !from.startsWith('#') && /^30[1278]$/.test(code)) redirects.set(from, to);
    }
  }
  function targetOf(url) {
    const seen = new Set();
    while (redirects.has(url.pathname)) {
      if (seen.has(url.pathname)) return null;
      seen.add(url.pathname);
      url = new URL(redirects.get(url.pathname), site);
    }
    return url;
  }
  for (const [route, page] of pages) {
    const fail = (message) => errors.push({ page: route, message });
    page.errors.forEach(fail);
    const article = route.startsWith('/blog/') && route !== '/blog/';
    if (article) {
      if (page.h1 !== 1) fail(`expected one H1, found ${page.h1}`);
      if (page.noindex) fail('article is marked noindex');
      if (page.canonical.length !== 1 || page.canonical[0] !== `${site}${route}`) fail('incorrect canonical URL');
      const postings = page.schemas.filter((schema) => schema['@type'] === 'BlogPosting');
      if (postings.length !== 1) fail(`expected one BlogPosting, found ${postings.length}`);
    }
    for (const href of [...page.links, ...page.assets]) {
      let url;
      try { url = new URL(href, `${site}${route}`); }
      catch { fail(`invalid URL: ${href}`); continue; }
      if (url.origin !== site || !['http:', 'https:'].includes(url.protocol)) continue;
      url = targetOf(url);
      if (!url) { fail(`redirect loop: ${href}`); continue; }
      if (url.origin !== site) continue;
      const pathname = decodeURIComponent(url.pathname);
      const target = pages.get(pathname) ?? pages.get(`${pathname.replace(/\/$/, '')}/`);
      const file = join(root, pathname);
      if (!target && !(existsSync(file) && statSync(file).isFile())) {
        fail(`missing internal target: ${href}`);
      } else if (target && url.hash && !target.ids.has(decodeURIComponent(url.hash.slice(1)))) {
        fail(`missing heading: ${href}`);
      }
    }
  }
  return { pages: pages.size, articles: [...pages.keys()].filter((p) => p.startsWith('/blog/') && p !== '/blog/').length, errors };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const report = auditSite(process.argv[2] ?? 'dist');
  if (process.env.SITE_AUDIT_REPORT) writeFileSync(process.env.SITE_AUDIT_REPORT, JSON.stringify(report, null, 2));
  for (const error of report.errors) console.error(`${error.page}: ${error.message}`);
  console.log(`Checked ${report.pages} pages, ${report.articles} articles: ${report.errors.length} errors.`);
  process.exitCode = report.errors.length ? 1 : 0;
}
