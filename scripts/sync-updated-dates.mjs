import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import process from 'node:process';

const POSTS_DIR = join(process.cwd(), 'src/content/blog');
const FRONTMATTER_PATTERN = /^---\n([\s\S]*?)\n---/;

function stripQuotes(value) {
  return value.replace(/^['"]|['"]$/g, '').trim();
}

function extractFrontmatter(source) {
  return source.match(FRONTMATTER_PATTERN);
}

function extractField(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return match ? stripQuotes(match[1]) : null;
}

function formatDate(date) {
  return date.toISOString().replace('.000Z', 'Z');
}

function getGitHistory(relativePath) {
  const output = execFileSync('git', ['log', '--follow', '--format=%H|%cI', '--', relativePath], {
    cwd: process.cwd(),
    encoding: 'utf8'
  }).trim();

  if (!output) {
    return [];
  }

  return output
    .split('\n')
    .map((line) => {
      const [commit, committedAt] = line.split('|');
      const date = new Date(committedAt);
      return Number.isNaN(date.valueOf()) ? null : { commit, date };
    })
    .filter(Boolean);
}

function getHeadSource(relativePath) {
  try {
    return execFileSync('git', ['show', `HEAD:${relativePath}`], {
      cwd: process.cwd(),
      encoding: 'utf8'
    });
  } catch {
    return null;
  }
}

function isModified(relativePath) {
  const output = execFileSync('git', ['status', '--porcelain', '--', relativePath], {
    cwd: process.cwd(),
    encoding: 'utf8'
  }).trim();

  return output.length > 0 && !output.startsWith('??');
}

function stripUpdatedDate(source) {
  return source.replace(/^updatedDate:\s*.+\n/m, '');
}

function getSourceAtCommit(relativePath, commit) {
  try {
    return execFileSync('git', ['show', `${commit}:${relativePath}`], {
      cwd: process.cwd(),
      encoding: 'utf8'
    });
  } catch {
    return null;
  }
}

function getLatestMeaningfulCommitDate(relativePath) {
  const history = getGitHistory(relativePath);
  let previousNormalizedSource = null;
  let previousNormalizedSourceDate;

  for (const entry of history) {
    const sourceAtCommit = getSourceAtCommit(relativePath, entry.commit);
    if (sourceAtCommit === null) {
      continue;
    }

    const normalizedSource = stripUpdatedDate(sourceAtCommit);

    if (previousNormalizedSource !== null && normalizedSource !== previousNormalizedSource) {
      return previousNormalizedSourceDate;
    }

    previousNormalizedSource = normalizedSource;
    previousNormalizedSourceDate = entry.date;
  }

  return history.at(-1)?.date;
}

function maxDate(...dates) {
  const validDates = dates.filter(Boolean);
  if (validDates.length === 0) {
    return undefined;
  }

  return validDates.reduce((latest, current) => (current > latest ? current : latest));
}

function syncPost(relativePath) {
  const absolutePath = join(process.cwd(), relativePath);
  const source = readFileSync(absolutePath, 'utf8');
  const frontmatterMatch = extractFrontmatter(source);

  if (!frontmatterMatch) {
    return null;
  }

  const [fullFrontmatter, frontmatterBody] = frontmatterMatch;
  const pubDateValue = extractField(frontmatterBody, 'pubDate');

  if (!pubDateValue) {
    return null;
  }

  const pubDate = new Date(pubDateValue);

  if (Number.isNaN(pubDate.valueOf())) {
    return null;
  }

  const headSource = getHeadSource(relativePath);
  const latestCommittedEdit = getLatestMeaningfulCommitDate(relativePath);
  const hasMeaningfulWorkingTreeChanges =
    isModified(relativePath) && headSource !== null && stripUpdatedDate(source) !== stripUpdatedDate(headSource);
  const latestWorkingTreeEdit = hasMeaningfulWorkingTreeChanges ? statSync(absolutePath).mtime : undefined;

  const nextUpdatedDate = maxDate(latestCommittedEdit, latestWorkingTreeEdit);

  if (!nextUpdatedDate || nextUpdatedDate <= pubDate) {
    return null;
  }

  const updatedDateLine = `updatedDate: ${formatDate(nextUpdatedDate)}`;
  const hasUpdatedDate = /^updatedDate:\s*.+$/m.test(frontmatterBody);
  const nextFrontmatterBody = hasUpdatedDate
    ? frontmatterBody.replace(/^updatedDate:\s*.+$/m, updatedDateLine)
    : frontmatterBody.replace(/^pubDate:\s*.+$/m, (match) => `${match}\n${updatedDateLine}`);
  const nextFrontmatter = `---\n${nextFrontmatterBody}\n---`;

  if (nextFrontmatter === fullFrontmatter) {
    return null;
  }

  writeFileSync(absolutePath, source.replace(fullFrontmatter, nextFrontmatter));
  return relativePath;
}

const updatedFiles = [];

for (const entry of readdirSync(POSTS_DIR)) {
  if (extname(entry) !== '.md') {
    continue;
  }

  const relativePath = `src/content/blog/${entry}`;
  const updatedFile = syncPost(relativePath);

  if (updatedFile) {
    updatedFiles.push(updatedFile);
  }
}

if (updatedFiles.length > 0) {
  console.log(`Synced updatedDate for ${updatedFiles.length} post(s).`);
  for (const file of updatedFiles) {
    console.log(`- ${file}`);
  }
} else {
  console.log('No updatedDate changes were needed.');
}
