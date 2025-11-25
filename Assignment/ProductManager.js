// Q1 E-Commerce Product Manager
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
  applyDiscount(percent) {
    this.price -= (this.price * percent) / 100;
  }
  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`;
  }
}
const products = [
  new Product(1,"Laptop",50000,"Electronics"),
  new Product(2,"Shoes",1500,"Fashion"),
  new Product(3,"Mouse",800,"Electronics")
];
const filtered = products.filter(p=>p.price>1000);
console.log(filtered.map(p=>p.getDetails()));
