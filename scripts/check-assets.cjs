const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        results = results.concat(walk(fullPath));
      }
    } else if (/\.(jsx?|tsx?|html|css|json)$/.test(file)) {
      results.push(fullPath);
    }
  });
  return results;
}

const allFiles = walk('src');
allFiles.push('index.html');

const imgRegex = /["'](\/(?:images|icons)\/[^"'\s\?#]+\.(?:jpg|jpeg|png|svg|webp|mp4))["']/g;
const referenced = new Set();

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    referenced.add(match[1]);
  }
});

console.log('Total referenced static assets:', referenced.size);
let missingCount = 0;
for (const p of referenced) {
  const local = path.join('public', p);
  if (!fs.existsSync(local)) {
    console.log('MISSING:', p);
    missingCount++;
  } else {
    console.log('OK:', p);
  }
}
console.log('Missing count:', missingCount);
