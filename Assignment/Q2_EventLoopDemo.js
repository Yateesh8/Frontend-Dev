// Q2 - EventLoopDemo.js
console.log("Start");

setTimeout(() => {
    console.log("setTimeout callback (Macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise.then callback (Microtask)");
});

console.log("Middle");
console.log("End");
