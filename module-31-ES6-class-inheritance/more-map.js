const friends = ["Tom Hanks", "Tom Cruise", "Tom Solaiman"];

const fLength = friends.map((x) => x.length);
// console.log(fLength);

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "white" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 300, color: "blue" },
];

const productNames = products.map((product) => product.name);
// console.log(productNames);
const productPrices = products.map((prices) => prices.price);
// console.log(productPrices);

products.forEach((product) => console.log(product.color));
