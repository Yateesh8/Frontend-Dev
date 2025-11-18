// Strict-Mode-Showdown.js (Q8)
// Demonstrate differences when using 'use strict' vs not.
// The function below has duplicate parameter names and assigns to undeclared globals in non-strict code.

function demoNonStrict(a, aSecond) {
  // Without 'use strict', duplicate params are allowed (older JS engines), and assigning undeclared globals creates globals.
  total = 10; // creates global 'total' in non-strict mode
  try { delete total; } catch (e) { /* may fail silently */ }
  console.log('Non-strict demo finished. total type:', typeof total);
}

(function runBoth() {
  console.log('--- Running non-strict demo (no strict mode) ---');
  demoNonStrict(5, 10);

  console.log('\n--- Running strict demo (should throw) ---');
  try {
    (function demoStrict(a, a) { // duplicate param name illegal in strict mode
      'use strict';
      let total = 10;
      // delete total; // illegal to delete non-configurable variable - would throw in strict mode if used
      console.log('Strict demo inside function, total:', total);
    })(5, 10);
  } catch (err) {
    console.error('Strict-mode error caught:', err.message);
  }
})();

// Correct ES6 version: use unique param names and declare variables properly:
(function correctVersion(x, y) {
  'use strict';
  const total = 10;
  console.log('Correct version total:', total);
})(5, 10);
