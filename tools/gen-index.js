const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'posts');
const files = fs.readdirSync(dir)
    .filter(f => /\.md$/.test(f) && !f.startsWith('_'));

const items = files.map(name => {
    const text = fs.readFileSync(path.join(dir, name), 'utf8');
    const stem = name.replace(/\.md$/, '');
    let title = stem;
    let date = '';
    const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (m) {
        m[1].split(/\r?\n/).forEach(line => {
            const i = line.indexOf(':');
            if (i > -1) {
                const key = line.slice(0, i).trim();
                const val = line.slice(i + 1).trim();
                if (key === 'title') title = val;
                if (key === 'date') date = val;
            }
        });
    }
    return { file: stem, title, date };
});

items.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

const out = {
    generatedAt: new Date().toISOString().slice(0, 10),
    items
};

fs.writeFileSync(path.join(dir, 'index.json'), JSON.stringify(out, null, 2) + '\n');
console.log('posts/index.json updated: ' + items.length + ' posts');
