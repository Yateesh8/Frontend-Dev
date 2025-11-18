// Employee-Salary-Projection.js
// Q8: Compute 5-year salary projection with yearly increments

let currentSalary = 50000; // base salary
const annualIncrementPercent = 5; // percent increase each year
const projection = [];

for (let year = 1; year <= 5; year++) {
  // increase salary by increment percent each year
  currentSalary += (currentSalary * (annualIncrementPercent / 100));
  projection.push({ year: year, salary: Math.round(currentSalary) });
}

// Print formatted console table
console.table(projection);
