const numbers = [4, 6, 7, 10];
const output2 = [];

// function doubleOld(number) {
//   return number * 2;
// }

const doubleItNew = (number) => number * 2;

for (const number of numbers) {
  const result = doubleItNew(number);
  output2.push(result);
}
// console.log(output2);

// NOTE: using map
// map is a callback function
// const output = numbers.map(doubleItNew);
const output = numbers.map((number) => number * 2);
// console.log(output);
// NOTE: map যা করেঃ-
// ১। array কে লুপ করবে
// ২। প্রতিটা element এর জন্য যে ফাংশন দেয়া হইছে, তাকে call করবে
// ৩/ যে result  হবে, সেটাকে বামের array তে push করবে

const square = numbers.map((x) => x * x);
console.log(square);
