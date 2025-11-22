
function Product(name,price){this.name=name;this.price=price;}
Product.prototype.applyDiscount=function(p){return this.price*(1-p/100);}
let p1=new Product("A",100);let p2=new Product("B",200);let p3=new Product("C",300);
console.log(p1.applyDiscount(10),p2.applyDiscount(20),p3.applyDiscount(30));
