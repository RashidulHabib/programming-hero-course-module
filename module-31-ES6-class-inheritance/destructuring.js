const fish = {
  id: 34,
  name: "king Hilsha",
  price: 9000,
  phone: "013242563466",
  address: "Chadpur",
  dress: "silver",
};
// console.log(fish.phone);
// বারবার অবজেক্ট কে কল না করে, অবজেক্ট এর প্রপার্টিকে আমরা আলাদা ভেরিয়েবলে সেভ করতে পারি।
// NOTE: THis is the old way
// const phone = fish.phone;
// const address = fish.address;
// const name = fish.name;
// const dress = fish.dress;

// NOTE: new way- destructuring
const { name, phone, dress, address, price } = fish;

console.log(phone);
console.log(phone, address);
console.log(phone, address, name);
console.log(price, address, name, dress);
console.log(name, address, dress, phone);

// NOTE: nested array
const company = {
  name: "Gp",
  ceo: { id: 1, name: "Ajmol", food: "fuchka" },
  web: {
    work: "website devilopment",
    employee: 22,
    framework: "react",
    tech: {
      first: "html",
      second: "css",
      third: "js",
    },
  },
};

/* console.log(company.ceo.name);
console.log(company.web.framework); */
const { work, framework } = company.web;
const { id, name } = company.ceo;
const { first, third } = company.web.tech;

console.log(work, framework, id, name);
console.log(third, first);
