const products = [
  { name: "samsung s5 phone", price: 54641 },
  { name: "asus t50 laptop", price: 84644 },
  { name: "lenovo ideapad laptop", price: 46440 },
  { name: "poco f3 pro", price: 3064 },
  { name: "lg smart tv", price: 40644 },
  { name: "sony oled tv", price: 50644 },
];

for (const product of products) {
  if (product.price < 10000) {
    // break;
    continue;
  }
  console.log(product);
}
