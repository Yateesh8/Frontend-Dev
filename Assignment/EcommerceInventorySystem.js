
const products=[{id:1,name:"A",category:"x",price:100,stock:2},{id:2,name:"B",category:"y",price:200,stock:10},{id:3,name:"C",category:"x",price:150,stock:1}];
function getLowStockProducts(){return products.filter(p=>p.stock<5);}
function sortProductsByPrice(){return[...products].sort((a,b)=>a.price-b.price);}
function calculateTotalInventoryValue(){return products.reduce((t,p)=>t+p.price*p.stock,0);}
function groupByCategory(){return products.reduce((g,p)=>{(g[p.category]=g[p.category]||[]).push(p);return g;},{});}
console.log(getLowStockProducts(),sortProductsByPrice(),calculateTotalInventoryValue(),groupByCategory());
