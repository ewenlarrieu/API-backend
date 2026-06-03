const Database = require('better-sqlite3');
const db = new Database('./dev.db');

console.log('\n=== Tasks ===');
const tasks = db.prepare('SELECT id, title, status FROM Task').all();
console.table(tasks);

db.close();
