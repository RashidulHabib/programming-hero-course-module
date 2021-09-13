const products = [
  "Dell hardcore i29 200GB laptop",
  "500mp camera iphone",
  "yellow laptop with black camera",
  "1X5959 Lenovo commercial yoga Laptop",
  "lg rollable phone",
  "Dell laptop juter na",
  "Huwai google wala phone",
  "mackbook pro laptop",
  "Dell vanga laptop",
  "checking if in last Dell",
];

/* const searching = "laptop";
// NOTE: indexOf
const output = [];

for (const product of products) {
  if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    output.push(product);
  }
}
console.log(output); */

// NOTE: includes
/* const searching = "laptop";
const output = [];
for (const product of products) {
  if (product.toLowerCase().includes(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output); */

// NOTE: startsWith
const searching = "dell";
const output = [];
for (const product of products) {
  if (product.toLowerCase().startsWith(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);
