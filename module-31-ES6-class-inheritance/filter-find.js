// NOTE: filter
const numbers = [5, 34, 56, 67, 89, 3, 60, 2];
const bigNumbers = numbers.filter((number) => number > 20);
// console.log(bigNumbers);

const divisableNumber = numbers.filter((number) => number % 2 == 0);
// console.log(divisableNumber);

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "white" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 300, color: "black" },
];

const bigPrice = products.filter((x) => x.price > 1000);
const colorFilter = products.filter(
  (x) => x.color == "black" && x.price > 1000
);

// console.log(colorFilter);

// NOTE: find
const blaclColor = products.find((y) => y.color == "black");
console.log(blaclColor);
