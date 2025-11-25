// Q8 myMap implementation
Array.prototype.myMap = function(callback) {
  const output = [];
  for(let i=0;i<this.length;i++){
    output.push(callback(this[i], i, this));
  }
  return output;
};
console.log([1,2,3].myMap(n=>n*2));
