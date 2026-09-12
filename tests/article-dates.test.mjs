import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, utimesSync, statSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

test('repeated builds do not turn their own date writes into new edits', () => {
  const root = mkdtempSync(join(tmpdir(), 'article-dates-'));
  const script = fileURLToPath(new URL('../scripts/sync-updated-dates.mjs', import.meta.url));
  try {
    const git = (...args) => execFileSync('git', args, { cwd: root, stdio: 'pipe' });
    git('init', '-b', 'main');
    mkdirSync(join(root, 'src/content/blog'), { recursive: true });
    const file = join(root, 'src/content/blog/article.md');
    writeFileSync(file, '---\ntitle: Article\npubDate: 2020-01-01\n---\nOriginal\n');
    git('add', '.');
    git('-c', 'user.name=Test', '-c', 'user.email=test@example.test', 'commit', '-m', 'Initial');
    writeFileSync(file, readFileSync(file, 'utf8') + 'A meaningful edit\n');
    const edited = new Date('2030-01-01T12:00:00Z');
    utimesSync(file, edited, edited);
    const run = () => execFileSync(process.execPath, [script], { cwd: root, stdio: 'pipe' });
    run();
    const first = readFileSync(file, 'utf8');
    assert.match(first, /updatedDate: 2030-01-01T12:00:00Z/);
    assert.equal(statSync(file).mtime.toISOString(), edited.toISOString());
    run();
    assert.equal(readFileSync(file, 'utf8'), first);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
