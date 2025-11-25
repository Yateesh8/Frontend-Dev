// Q7 makeMultiplier closure
function makeMultiplier(multiplier) {
  return function(num) {
    return num * multiplier; // closure captures multiplier
  };
}
const triple = makeMultiplier(3);
console.log(triple(5));
