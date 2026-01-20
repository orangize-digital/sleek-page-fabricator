#!/usr/bin/env node

/**
 * Asset Filename Validator
 *
 * This script checks all files in the public/ directory for non-web-safe filenames:
 * - Non-ASCII characters (umlauts, special characters)
 * - Spaces in filenames
 * - Uppercase letters (optional strict mode)
 *
 * Usage: node scripts/check-assets.js [--strict]
 *
 * Exit codes:
 *   0 - All filenames are web-safe
 *   1 - Found problematic filenames
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const ASSET_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.pdf', '.ico'];

// Check for non-ASCII characters
const hasNonAscii = (str) => /[^\x00-\x7F]/.test(str);

// Check for spaces
const hasSpaces = (str) => /\s/.test(str);

// Check for uppercase (strict mode)
const hasUppercase = (str) => /[A-Z]/.test(str);

// Check for URL-unsafe characters
const hasUnsafeChars = (str) => /[+&%#?=]/.test(str);

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      // Check directory name
      callback(filepath, file, true);
      walkDir(filepath, callback);
    } else {
      callback(filepath, file, false);
    }
  }
}

function checkAssets(strictMode = false) {
  const issues = [];

  walkDir(PUBLIC_DIR, (filepath, filename, isDir) => {
    const relativePath = path.relative(PUBLIC_DIR, filepath);
    const problems = [];

    if (hasNonAscii(filename)) {
      problems.push('contains non-ASCII characters (umlauts/special chars)');
    }

    if (hasSpaces(filename)) {
      problems.push('contains spaces');
    }

    if (hasUnsafeChars(filename)) {
      problems.push('contains URL-unsafe characters (+, &, %, #, ?, =)');
    }

    if (strictMode && hasUppercase(filename)) {
      problems.push('contains uppercase letters');
    }

    if (problems.length > 0) {
      issues.push({
        path: relativePath,
        type: isDir ? 'directory' : 'file',
        problems
      });
    }
  });

  return issues;
}

function suggestFix(filename) {
  return filename
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/\s+/g, '-')
    .replace(/[+&%#?=]/g, '-')
    .replace(/-+/g, '-')
    .replace(/-\./g, '.');
}

function main() {
  const strictMode = process.argv.includes('--strict');

  console.log('');
  console.log('=== Asset Filename Validator ===');
  console.log(`Mode: ${strictMode ? 'Strict (no uppercase)' : 'Standard'}`);
  console.log(`Checking: ${PUBLIC_DIR}`);
  console.log('');

  const issues = checkAssets(strictMode);

  if (issues.length === 0) {
    console.log('✅ All asset filenames are web-safe!');
    console.log('');
    process.exit(0);
  }

  console.log(`❌ Found ${issues.length} problematic filename(s):`);
  console.log('');

  for (const issue of issues) {
    console.log(`  ${issue.type === 'directory' ? '📁' : '📄'} ${issue.path}`);
    for (const problem of issue.problems) {
      console.log(`      - ${problem}`);
    }
    const basename = path.basename(issue.path);
    const suggested = suggestFix(basename);
    if (suggested !== basename) {
      console.log(`      → Suggested: ${suggested}`);
    }
    console.log('');
  }

  console.log('');
  console.log('To fix these issues:');
  console.log('  1. Rename files/folders to use lowercase ASCII characters');
  console.log('  2. Replace spaces with hyphens (-)');
  console.log('  3. Replace umlauts: ä→ae, ö→oe, ü→ue, ß→ss');
  console.log('  4. Update any code references to match new filenames');
  console.log('');

  process.exit(1);
}

main();
