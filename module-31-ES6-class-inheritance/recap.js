// NOTE: let and const
const myName = "Rashidul Habib";
let phone = "Xiaomi";
phone = "poco f2 pro";

// NOTE: template string
const myNotes = `My name is ${myName}. I have a ${phone} mobile`;
console.log(myNotes);

//NOTE: default parameter and spread of three dots...
function maxNumber(array = []) {
  const max = Math.max(...array);
  return max;
}
console.log(maxNumber());

// NOTE: arrow function
const square = (x) => x * x;
console.log(square(7));
