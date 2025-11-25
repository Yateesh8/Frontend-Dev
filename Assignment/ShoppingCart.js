// Q9 Shopping Cart
class Cart {
  constructor(){ this.items=[]; }
  addItem(name,price,qty){ this.items.push({name,price,qty}); }
  getTotal(){ return this.items.reduce((s,i)=>s+i.price*i.qty,0); }
  applyCoupon(c){
    if(!/^(SAVE\d+|DISC\d+)$/.test(c)) return "Invalid coupon";
    const percent = parseInt(c.match(/\d+/)[0]);
    return this.getTotal()*(1-percent/100);
  }
}
