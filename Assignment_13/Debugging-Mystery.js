'use strict';
// Debugging-Mystery.js (Q4)
// Original code throws in strict mode because 'greeting' is undeclared.
// Fix by declaring greeting with let/const inside function and explain scope change via comments.

function showMessage() {
  // In strict mode, assigning to an undeclared identifier throws ReferenceError.
  // Fix: declare the variable explicitly so it becomes local to the function.
  const greeting = 'Welcome';
  console.log(greeting);
}

showMessage();

// Notes for debugging:
// - Under strict mode, creation of accidental globals is prevented.
// - In debugger (VS Code) set a watch for 'greeting' inside the function to observe its value.
// - Observe call stack: showMessage -> (global).
