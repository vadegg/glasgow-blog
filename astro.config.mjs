import { readFileSync, readdirSync, statSync } from 'node:fs';
import { basename, extname } from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
  return statSync(new URL(relativePath, projectRoot)).mtime;
}

function buildLastModLookup() {
  const lastModByPath = new Map();
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
    latestBlogUpdate = latestDate(latestBlogUpdate, lastmod);
  }

  const latestSiteUpdate = latestDate(
    latestBlogUpdate,
    readFileDate('./src/pages/about.astro'),
    readFileDate('./src/content/legal/cookie-policy.html'),
    readFileDate('./src/content/legal/privacy-policy.html')
  );

  if (latestBlogUpdate) {
    lastModByPath.set('/', latestBlogUpdate);
    lastModByPath.set('/blog/', latestBlogUpdate);
    lastModByPath.set('/authors/vadim/', latestBlogUpdate);
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

  return { lastModByPath, latestSiteUpdate };
}

const { lastModByPath, latestSiteUpdate } = buildLastModLookup();

export default defineConfig({
  site: 'https://blog.glasgow.works',
  integrations: [
    sitemap({
      lastmod: latestSiteUpdate,
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        return {
          ...item,
          lastmod: lastModByPath.get(pathname) ?? item.lastmod
        };
      }
    })
  ]
});
