const products = [
  { name: "samsung s5 phone", price: 54641 },
  { name: "asus t50 laptop", price: 84644 },
  { name: "lenovo ideapad laptop", price: 4644 },
  { name: "poco f3 pro", price: 30644 },
  { name: "lg smart tv", price: 40644 },
  { name: "sony oled tv", price: 50644 },
];

function searchProducts(products, searchText) {
  //   console.log(products, searchText);
  const matched = [];
  for (const product of products) {
    // if (product.name.indexOf(searchText) != -1)
    if (product.name.includes(searchText)) {
      console.log(product.name);
      matched.push(product);
    }
  }
  return matched;
}

const match = searchProducts(products, "laptop");
console.log(match);
