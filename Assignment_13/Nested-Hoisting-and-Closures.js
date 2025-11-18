'use strict';
// Nested-Hoisting-and-Closures.js (Q10)
// Demonstrate hoisting effects in nested functions and difference when converting inner to arrow function.

function outer() {
  console.log('Outer sees count (hoisted var):', count); // undefined due to hoisting of var count inside outer
  var count = 5;

  function inner() {
    console.log('Inner sees count before local var (hoisted):', count); // undefined due to var declaration hoisted in inner scope
    var count = 10;
    console.log('Inner after local assignment:', count); // 10
  }

  inner();
  console.log('Outer after inner:', count); // 5
}

outer();

// Arrow inner version
function outerArrow() {
  var count = 5;
  const innerArrow = () => {
    // arrow does not create its own 'var' hoisting; if we reference count before declaration inside arrow, behavior differs.
    console.log('Inner arrow sees outer count:', count);
  };
  innerArrow();
}
outerArrow();

// Comments for debugging:
// - Use a debugger breakpoint at the first console.log inside outer to inspect the hoisting states.
// - Observe call stack: outer -> inner (or innerArrow).
