import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const root = new URL('../', import.meta.url);

test('published top-task scores can be reproduced from distinct participant choices', () => {
  const csv = readFileSync(new URL('public/downloads/top-task-example-responses.csv', root), 'utf8');
  const [header, ...lines] = csv.trim().split(/\r?\n/);
  assert.equal(header, 'example_response_id,rank_1,rank_2,rank_3,rank_4,rank_5');
  const responses = lines.map((line) => line.split(','));
  assert.equal(responses.length, 100);
  assert.equal(new Set(responses.map(([id]) => id)).size, responses.length);

  const totals = new Map();
  for (const [id, ...choices] of responses) {
    assert.match(id, /^example-\d{3}$/);
    assert.equal(choices.length, 5);
    assert.equal(new Set(choices).size, 5, `${id} selects a task more than once`);
    for (const [rank, task] of choices.entries()) {
      assert.ok(task.length > 0);
      const counts = totals.get(task) ?? [0, 0, 0, 0, 0];
      counts[rank] += 1;
      totals.set(task, counts);
    }
  }

  const article = readFileSync(new URL('src/content/blog/2026-09-12-top-task-analysis-ux-research.md', root), 'utf8');
  const table = article.split('\n')
    .filter((line) => line.startsWith('| ') && !line.startsWith('| Task |'))
    .map((line) => line.split('|').slice(1, -1).map((cell) => cell.trim()));
  const totalRow = table.find(([name]) => name === 'Total');
  const taskRows = table.filter(([name]) => name !== 'Total');
  assert.equal(taskRows.length, 8);
  assert.deepEqual(taskRows.map(([task]) => task).sort(), [...totals.keys()].sort());

  const denominator = responses.length * (5 + 4 + 3 + 2 + 1);
  let pointsSum = 0;
  for (const [task, ...cells] of taskRows) {
    assert.equal(cells.length, 8);
    const counts = totals.get(task);
    const selected = counts.reduce((sum, n) => sum + n, 0);
    const weighted = counts.reduce((sum, n, rank) => sum + n * (5 - rank), 0);
    assert.deepEqual(cells.slice(0, 5).map(Number), counts, task);
    assert.ok(selected <= responses.length, `${task} exceeds the participant count`);
    assert.equal(Number(cells[5]), selected, `${task} selection count`);
    assert.equal(Number(cells[6]), weighted, `${task} weighted points`);
    assert.equal(cells[7], `${(100 * weighted / denominator).toFixed(1)}%`, `${task} share`);
    pointsSum += weighted;
  }
  assert.equal(pointsSum, denominator);
  for (let rank = 0; rank < 5; rank += 1) {
    assert.equal([...totals.values()].reduce((sum, counts) => sum + counts[rank], 0), responses.length);
  }
  assert.deepEqual(totalRow, ['Total', '100', '100', '100', '100', '100', '500', '1500', '100.0%']);
});
