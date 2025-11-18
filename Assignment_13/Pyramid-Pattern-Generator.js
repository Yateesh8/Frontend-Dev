'use strict';
// Pyramid-Pattern-Generator.js (Q6)
// Generate simple pyramid pattern. Observe changes when using var vs let.
// Default limit controlled by userInput (fallback 5).

function generatePyramid(limit = 5) {
  'use strict';
  for (let i = 1; i <= limit; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row += '* ';
    }
    console.log(row.trim());
  }
}

console.log('Default pyramid (limit=4 example):');
generatePyramid(4);

// If using var for loop variables, they leak to function scope in non-strict older patterns.
// 'use strict' helps catch accidental globals if you forget to declare loop variables.
