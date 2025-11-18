'use strict';
// Employee-Bonus-Calculator.js (Q2)
// Convert salary and years to numbers, compute bonus with strict validation.
// Wrapped in try...catch to handle missing properties or conversion errors.

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (const emp of employees) {
  try {
    if (!emp.name) throw new Error('Missing name property');
    if (!('salary' in emp) || !('years' in emp)) throw new Error('Missing salary or years property');

    const salary = Number(emp.salary);
    const years = Number(emp.years);
    if (Number.isNaN(salary) || Number.isNaN(years)) throw new TypeError('Invalid number conversion for salary or years');

    const bonusRate = years > 3 ? 0.10 : 0.05;
    const bonus = salary * bonusRate;

    console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`);
  } catch (err) {
    console.error(`Error processing employee record: ${JSON.stringify(emp)} ->`, err.message);
  }
}
