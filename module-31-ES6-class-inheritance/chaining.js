// declare variable based on the name of an object property
const myObject = {
  a: 5,
  x: 45,
  y: 844,
  b: 45,
  c: 900,
};

const { x, b, a, y } = myObject;
// console.log(x, a);

// destructuring array
const [a, b] = [67, "hablu", 98, 76];
// console.log(a, b);

// chaining
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
console.log(company.web.tech.second, company?.p?.q);
console.log(company?.backend?.web.tech.second);
