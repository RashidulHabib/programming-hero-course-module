const products = [
  { name: "laptop", price: 80000 },
  { name: "shirt", price: 500 },
  { name: "watch", price: 3500 },
  { name: "phone", price: 5500 },
];

let totalPrice = 0;

for (const product of products) {
  totalPrice = totalPrice + product.price;
}
// console.log(totalPrice);

const cart = [
  { name: "laptop", price: 80000, quantity: 1 },
  { name: "shirt", price: 500, quantity: 8 },
  { name: "watch", price: 3500, quantity: 3 },
  { name: "phone", price: 5500, quantity: 1 },
];
for (const product of cart) {
  totalPrice = totalPrice + product.price * product.quantity;
}
console.log(totalPrice);
