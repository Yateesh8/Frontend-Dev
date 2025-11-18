'use strict';
// Hoisting-Lab-Sequence-Trap.js (Q5)
// Demonstrate hoisting behaviors and rewrite to run properly.
// Explain hoisting of var vs function declarations and TDZ for let/const.

console.log('Predicting hoisting behavior...');
try {
  // Original snippet (would show undefined for var and error for let)
  // console.log(score);
  // announce();
  // var score = 50;
  // function announce() { console.log("Game started"); }
  // let status = "ready";
  // startGame();
  // function startGame() { console.log(status); }

  // Fixed version:
  var score = 50; // declared before use to avoid undefined log
  function announce() { console.log('Game started'); }
  console.log(score); // 50
  announce();
  let status = 'ready';
  function startGame() { console.log(status); }
  startGame();

  // Arrow-function version (note: function declarations are hoisted, arrow assigned to const is not)
  const announceArrow = () => console.log('Game started (arrow)');
  const startGameArrow = () => console.log(status);
  announceArrow();
  startGameArrow();
} catch (err) {
  console.error('Error during hoisting lab:', err);
}

// Comments:
// - var declarations are hoisted and initialized with undefined.
// - function declarations are hoisted with their body.
// - let/const are hoisted but in TDZ (temporal dead zone) until initialized.
