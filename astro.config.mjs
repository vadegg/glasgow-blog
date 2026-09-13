import { readFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { basename, extname } from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import scrollableTables from './src/lib/scrollable-tables.mjs';

const projectRoot = new URL('./', import.meta.url);
const blogContentDir = new URL('./src/content/blog/', projectRoot);

function stripQuotes(value) {
  return value.replace(/^['"]|['"]$/g, '').trim();
}

function extractFrontmatterValue(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return match ? stripQuotes(match[1]) : null;
}

function extractFrontmatter(source) {
  const match = source.match(/^---\s*([\s\S]*?)\s*---/);
  return match ? match[1] : '';
}

function latestDate(...dates) {
  const validDates = dates.filter(Boolean);
  if (validDates.length === 0) {
    return undefined;
  }

  return validDates.reduce((latest, current) => (current > latest ? current : latest));
}

function readFileDate(relativePath) {
  // Checkout/build timestamps do not describe an edit to the published page.
  try {
    const value = execFileSync('git', ['log', '-1', '--format=%cI', '--', relativePath], {
      cwd: projectRoot, encoding: 'utf8'
    }).trim();
    const date = new Date(value);
    return Number.isNaN(date.valueOf()) ? undefined : date;
  } catch {
    return undefined; // Omit lastmod when provenance is unavailable.
  }
}

function buildLastModLookup() {
  const lastModByPath = new Map();
  const topicUpdates = new Map();
  let latestBlogUpdate;

  for (const entry of readdirSync(blogContentDir)) {
    if (extname(entry) !== '.md') {
      continue;
    }

    const source = readFileSync(new URL(entry, blogContentDir), 'utf8');
    const frontmatter = extractFrontmatter(source);
    const slug = extractFrontmatterValue(frontmatter, 'slug') ?? basename(entry, '.md');
    const pubDate = extractFrontmatterValue(frontmatter, 'pubDate');
    const updatedDate = extractFrontmatterValue(frontmatter, 'updatedDate');
    const lastmod = new Date(updatedDate ?? pubDate);

    if (Number.isNaN(lastmod.valueOf())) {
      continue;
    }

    lastModByPath.set(`/blog/${slug}/`, lastmod);
    const hub = extractFrontmatterValue(frontmatter, 'hub');
    if (hub) topicUpdates.set(hub, latestDate(topicUpdates.get(hub), lastmod));
    latestBlogUpdate = latestDate(latestBlogUpdate, lastmod);
  }

  if (latestBlogUpdate) {
    lastModByPath.set('/', latestDate(latestBlogUpdate, readFileDate('./src/pages/index.astro')));
    lastModByPath.set('/blog/', latestDate(latestBlogUpdate, readFileDate('./src/pages/blog/index.astro')));
    lastModByPath.set('/authors/vadim/', latestDate(latestBlogUpdate, readFileDate('./src/data/site.ts')));
  }
  for (const [hub, date] of topicUpdates) {
    const path = `/blog/${hub}/`;
    lastModByPath.set(path, latestDate(lastModByPath.get(path), date));
  }

  lastModByPath.set('/about/', readFileDate('./src/pages/about.astro'));
  lastModByPath.set('/cookies/', latestDate(
    readFileDate('./src/pages/cookies.astro'),
    readFileDate('./src/content/legal/cookie-policy.html')
  ));
  lastModByPath.set('/privacy/', latestDate(
    readFileDate('./src/pages/privacy.astro'),
    readFileDate('./src/content/legal/privacy-policy.html')
  ));

  for (const slug of ['services', 'contact']) {
    lastModByPath.set(`/${slug}/`, readFileDate(`./src/pages/${slug}.astro`));
  }
  return lastModByPath;
}

const lastModByPath = buildLastModLookup();

export default defineConfig({
  site: 'https://blog.glasgow.works',
  // Preserve spaces between inline elements across the Astro 7 migration.
  compressHTML: true,
  markdown: { processor: satteri({ hastPlugins: [scrollableTables] }) },
  integrations: [
    sitemap({
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        return {
          ...item,
          lastmod: lastModByPath.get(pathname)
        };
      }
    })
  ]
});
