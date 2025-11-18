// Multi-Type-Data-Summary.js
// Q2: Create variables of various types and print a formatted report with types
// Uses: typeof and Array.isArray, outputs via console.table

const sampleString = 'Hello World';
const sampleNumber = 42;
const sampleBoolean = true;
const sampleArray = [1, 'two', false];
const sampleObject = { name: 'Sam', role: 'admin' };
const sampleNull = null;
let sampleUndefined; // intentionally undefined

// Build array of entries: label, value, type
const report = [
  { label: 'sampleString', value: sampleString, type: typeof sampleString },
  { label: 'sampleNumber', value: sampleNumber, type: typeof sampleNumber },
  { label: 'sampleBoolean', value: sampleBoolean, type: typeof sampleBoolean },
  { label: 'sampleArray', value: JSON.stringify(sampleArray), type: Array.isArray(sampleArray) ? 'array' : typeof sampleArray },
  { label: 'sampleObject', value: JSON.stringify(sampleObject), type: typeof sampleObject },
  { label: 'sampleNull', value: String(sampleNull), type: (sampleNull === null) ? 'null' : typeof sampleNull },
  { label: 'sampleUndefined', value: String(sampleUndefined), type: typeof sampleUndefined }
];

// Print a neat table showing label, value, and identified type
console.table(report);
