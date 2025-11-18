'use strict';
// Transaction-Validator.js (Q3)
// Loop through transactions, throw custom errors for negative, missing, null.
// Categorize into valid and invalid arrays and report counts.

class TransactionError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'TransactionError';
    this.code = code;
  }
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];
  try {
    if (tx === null) throw new TransactionError('Null transaction', 'NULL_ENTRY');
    if (!('id' in tx) || !('amount' in tx)) throw new TransactionError('Missing id or amount', 'MISSING_FIELD');
    if (typeof tx.amount !== 'number') throw new TransactionError('Invalid amount type', 'INVALID_TYPE');
    if (tx.amount < 0) throw new TransactionError('Negative amount', 'NEGATIVE_AMOUNT');

    // If all good, push to valid
    valid.push(tx);
  } catch (err) {
    invalid.push({ index: i, entry: tx, error: err.message, code: err.code || null });
  }
}

// Final report
console.log('Valid transactions count:', valid.length);
console.table(valid);
console.log('Invalid transactions count:', invalid.length);
console.table(invalid);
