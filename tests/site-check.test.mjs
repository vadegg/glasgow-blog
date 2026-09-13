import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { auditSite, auditSitemaps } from '../scripts/check-site.mjs';

function fixture(t, content, redirects = '') {
  const root = mkdtempSync(join(tmpdir(), 'blog-check-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'blog/test'), { recursive: true });
  writeFileSync(join(root, 'blog/test/index.html'), `<!doctype html><html><head>
    <link rel="canonical" href="https://blog.glasgow.works/blog/test/">
    <meta name="description" content="Choose a research method for a concrete product decision, then plan the participants, tasks and evidence needed to answer it.">
    <script type="application/ld+json">{"@type":"BlogPosting"}</script>
    </head><body><h1>Article</h1>${content}</body></html>`);
  writeFileSync(join(root, '_redirects'), redirects);
  return root;
}

test('detects the real em-dash heading mismatch', (t) => {
  const root = fixture(t, '<a href="#step-3-field-it-sample">Jump</a><h2 id="step-3-field-it--sample">Step 3</h2>');
  assert.match(auditSite(root).errors[0].message, /missing heading/);
});

test('rendered heading IDs, encoded fragments and redirects resolve', (t) => {
  const root = fixture(t, '<a href="#step--3">Jump</a><h2 id="step--3">Step</h2><a href="/old">Old URL</a>', '/old /blog/test/ 301');
  assert.deepEqual(auditSite(root).errors, []);
});

test('missing internal pages fail the build', (t) => {
  const root = fixture(t, '<a href="/how-to-conduct-user-interviews">Interviews</a>');
  assert.match(auditSite(root).errors[0].message, /missing internal target/);
});

test('duplicate structured data and noindex are rejected', (t) => {
  const root = fixture(t, '<meta name="robots" content="noindex"><script type="application/ld+json">{"@type":"BlogPosting"}</script>');
  const errors = auditSite(root).errors.map((error) => error.message);
  assert.ok(errors.some((error) => error.includes('noindex')));
  assert.ok(errors.some((error) => error.includes('found 2')));
});

test('editorial FAQ instructions cannot re-enter article structured data', (t) => {
  const root = fixture(t, '<script type="application/ld+json">{"@type":"FAQPage","mainEntity":[{"acceptedAnswer":{"text":"Explain the answer here"}}]}</script>');
  assert.ok(auditSite(root).errors.some((error) => error.message.includes('FAQPage')));
});

test('sitemap rejects retired URLs and missing live articles', (t) => {
  const root = fixture(t, 'Text');
  writeFileSync(join(root, 'sitemap-index.xml'), '<sitemapindex><sitemap><loc>https://blog.glasgow.works/sitemap-0.xml</loc></sitemap></sitemapindex>');
  writeFileSync(join(root, 'sitemap-0.xml'), '<urlset><url><loc>https://blog.glasgow.works/blog/retired/</loc></url></urlset>');
  assert.equal(auditSitemaps(root).length, 2);
  writeFileSync(join(root, 'sitemap-0.xml'), '<urlset><url><loc>https://blog.glasgow.works/blog/test/</loc><lastmod>2026-06-01</lastmod></url></urlset>');
  assert.deepEqual(auditSitemaps(root), []);
});
