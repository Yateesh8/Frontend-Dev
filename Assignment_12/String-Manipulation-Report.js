
/* Q2 String Manipulation Report */

let product = " wireless headphones PRO ";

// Trim spaces
product = product.trim().toLowerCase();

// Capitalize each word
product = product.split(" ")
  .map(w => w.charAt(0).toUpperCase() + w.slice(1))
  .join(" ");

// Replace "Pro" with "Pro Edition"
product = product.replace("Pro", "Pro Edition");

console.log("Clean Title:", product);
console.log("Length:", product.length);
