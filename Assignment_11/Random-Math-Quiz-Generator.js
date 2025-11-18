// Random-Math-Quiz-Generator.js
// Q9: Generate a random arithmetic question and calculate correct answer

const a = Math.floor(Math.random() * 20) + 1; // 1 - 20
const b = Math.floor(Math.random() * 20) + 1; // 1 - 20
const operators = ['+', '-', '*', '/'];
const operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

switch (operator) {
  case '+':
    correctAnswer = a + b;
    break;
  case '-':
    correctAnswer = a - b;
    break;
  case '*':
    correctAnswer = a * b;
    break;
  case '/':
    // avoid division by zero; also round to 2 decimals
    correctAnswer = (a / b).toFixed(2);
    break;
  default:
    correctAnswer = null;
}

console.log(`Question: What is ${a} ${operator} ${b}?`);
console.log('Correct answer:', correctAnswer);
