// Personalized-Login-Greeting.js
// Q1: Greet user based on current hour
// Usage: run in browser console or Node.js

// Declare userName and get current hour
const userName = 'Alex'; // change to test different names
const currentHour = new Date().getHours(); // 0 - 23

// Determine greeting based on hour
let greeting;
if (currentHour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

// Output greeting
console.log(greeting);
