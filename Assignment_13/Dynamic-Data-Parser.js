'use strict';
// Dynamic-Data-Parser.js (Q1)
// Convert mixed API data into Number, Boolean, String forms.
// Skip invalid numeric values and build separate arrays for valid and invalid numbers.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];
const detailedReport = [];

// Helper to test whether a value can be a valid number after trimming/convert
function toNumberSafe(val) {
  // null/undefined are invalid numeric conversions for our purposes
  if (val === null || val === undefined) return NaN;
  const n = Number(String(val).trim());
  return n;
}

for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];
  const asString = String(raw);
  const asBoolean = Boolean(raw && raw !== 'false' && raw !== '0' && raw.trim ? raw.trim() !== '' : raw);
  const asNumber = toNumberSafe(raw);

  // Determine numeric validity
  if (Number.isNaN(asNumber)) {
    invalidNumbers.push({ index: i, raw });
    detailedReport.push({ index: i, raw, asString, asBoolean, asNumber: 'Invalid Number' });
  } else {
    // valid numeric
    validNumbers.push(asNumber);
    detailedReport.push({ index: i, raw, asString, asBoolean, asNumber });
  }
}

// Print results
console.log('API Data:', apiData);
console.log('Valid numeric data:', validNumbers);
console.log('Invalid numeric entries:', invalidNumbers);
console.log('\nDetailed report:');
console.table(detailedReport);
