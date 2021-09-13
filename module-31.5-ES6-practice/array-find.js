// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।

const products = [
  { name: "bottle", price: 50 },
  { name: "ball", price: 300 },
  { name: "pen", price: 5 },
  { name: "knife", price: 500 },
  { name: "mobile", price: 5000 },
];

const priceFind = products.find((product) => product.price == 5000);
console.log(priceFind);
