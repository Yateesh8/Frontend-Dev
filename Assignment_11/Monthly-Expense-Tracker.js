// Monthly-Expense-Tracker.js
// Q3: Calculate total and average expenses, add 10% tax, and display formatted results.

const expenses = {
  food: 350.75,
  travel: 120.0,
  rent: 900.5,
  bills: 150.25,
  leisure: 89.99
};

// Sum expenses
const values = Object.values(expenses);
const total = values.reduce((sum, v) => sum + v, 0);

// Average
const average = total / values.length;

// Add 10% tax to total
const taxRate = 0.10;
const totalAfterTax = total + (total * taxRate);

// Format results to two decimals
console.log('Expense breakdown:', expenses);
console.log('Total:', total.toFixed(2));
console.log('Average:', average.toFixed(2));
console.log('Total after 10% tax:', totalAfterTax.toFixed(2));
