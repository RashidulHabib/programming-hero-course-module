// javascript object Notation
// JSON
const user = { id: 11, name: "Gorib Amir", job: "actor" };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
  name: "Alim Store",
  address: "Alomgir Road",
  profit: 15000,
  owner: {
    name: "Dia mirza",
    profession: "actor",
  },
  products: ["laptop", "mobile", "prpsi"],
  isExpensive: false,
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
console.log(shopStringified.owner); //undefiened

const converted = JSON.parse(shopStringified);
console.log(converted);
console.log(converted.owner); // owner: { name: "Dia mirza", profession: "actor" }
