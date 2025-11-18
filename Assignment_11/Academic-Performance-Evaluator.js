// Academic-Performance-Evaluator.js
// Q4: Evaluate promotion status based on marks of 5 subjects with validation
// Marks array test example
const marks = [78, 85, 69, 90, 74]; // change as needed

// Validate: if any subject < 35 => Detained
const anyFailed = marks.some(mark => mark < 35);

const total = marks.reduce((a,b) => a + b, 0);
const average = total / marks.length;
const percentage = average; // assuming marks are out of 100 per subject

let result;
if (anyFailed) {
  result = 'Detained (one or more subjects below passing)';
} else if (percentage >= 85) {
  result = 'Promoted with Distinction';
} else if (percentage >= 50) {
  result = 'Promoted';
} else {
  result = 'Detained';
}

console.log('Marks:', marks);
console.log('Total:', total);
console.log('Average:', average.toFixed(2));
console.log('Result:', result);
