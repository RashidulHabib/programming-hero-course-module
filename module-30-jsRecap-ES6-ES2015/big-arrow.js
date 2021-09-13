const add = (num1, num2) => num1 + num2;
console.log(add(12, 12));

const fiveTimes = (num) => num * 5;
// const fiveTimes = num => num * 5; //১ টা প্যারামিটার দিলে, সেটাতে ব্রাকেট না দিলেও চলবে।
console.log(fiveTimes(10));

const getName = () => "Sakib Al Hasan";
console.log(getName());

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  const output = result / 5;
  return output;
};
console.log(doMath(20, 10));
