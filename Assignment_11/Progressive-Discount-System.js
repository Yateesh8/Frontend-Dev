// Progressive-Discount-System.js
// Q6: Apply discount tiers based on total purchase amount

const totalPurchase = 7600; // test value, change as needed
let discountPercent = 0;

if (totalPurchase >= 10000) {
  discountPercent = 25;
} else if (totalPurchase >= 5000) {
  discountPercent = 15;
} else if (totalPurchase >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

const discountAmount = (discountPercent / 100) * totalPurchase;
const finalPrice = Math.round(totalPurchase - discountAmount);

console.log('Original total:', totalPurchase);
console.log('Discount percentage:', discountPercent + '%');
console.log('Final price after discount (rounded):', finalPrice);
