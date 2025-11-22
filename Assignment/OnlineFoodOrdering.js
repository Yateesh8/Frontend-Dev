
const menu={burger:100,pizza:200,pasta:150};
function calculateBill(orderItems){
try{
let prices=orderItems.map(i=>{if(!menu[i])throw new Error("Invalid item");return menu[i];});
return prices.reduce((a,b)=>a+b,0);
}catch(e){return e.message;}
}
console.log(calculateBill(["burger","pizza"]));
console.log(calculateBill(["burger","icecream"]));
