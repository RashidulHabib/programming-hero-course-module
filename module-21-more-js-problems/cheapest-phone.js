//array of objects
const phones = [
  { name: "samsung s21", price: 90000, camera: 108, storage: 512 },
  { name: "Poco f2 pro", price: 40000, camera: 64, storage: 128 },
  { name: "vivo v21e", price: 27000, camera: 488, storage: 128 },
  { name: "oppo reno", price: 15000, camera: 40, storage: 64 },
  { name: "walton premo", price: 15000, camera: 12, storage: 64 },
];

let cheapest = phones[0];
for (const phone of phones) {
  if (phone.price < cheapest.price) {
    cheapest = phone;
  }
}
console.log(cheapest);
