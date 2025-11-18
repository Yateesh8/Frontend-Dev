
/* Q8 Dynamic Discount Evaluator */

const cart = [
 { item: "Laptop", category: "electronics", price: 45000 },
 { item: "Shoes", category: "fashion", price: 2500 },
 { item: "Book", category: "education", price: 600 }
];

let total = 0;

for(let p of cart){
  let discount = 0;
  if(p.category === "electronics") discount = 0.10;
  else if(p.category === "fashion") discount = 0.05;

  p.final = p.price - p.price*discount;
}

total = cart.reduce((sum,p)=>sum+p.final,0);

// extra 5% if total > 50000
if(total > 50000){
  total -= total*0.05;
}

console.log("Cart:", cart);
console.log("Final Total:", total.toFixed(2));
