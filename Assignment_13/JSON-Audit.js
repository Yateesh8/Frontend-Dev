'use strict';
// JSON-Audit.js (Q9)
// Parse raw JSON strings, handle invalid JSON, detect missing keys, convert age to Number, filter under-18.

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const parsed = JSON.parse(line);
    // Validate required keys
    if (!('user' in parsed) || !('age' in parsed)) {
      throw new Error('Missing keys');
    }
    // Convert age to number
    parsed.age = Number(parsed.age);
    if (Number.isNaN(parsed.age)) throw new Error('Invalid age value');

    clean.push(parsed);
  } catch (err) {
    errors.push({ line: i, raw: line, error: err.message });
  }
}

console.log('Clean entries:');
console.table(clean);
console.log('Errors:');
console.table(errors);

// Bonus: filter under-18
const adults = clean.filter(u => u.age >= 18);
console.log('Adults only:');
console.table(adults);
