// function declaration
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(12, 10));

// function expression
const add2 = function add2(num1, num2) {
  return num1 - num2;
};
console.log(add2(12, 10));

// function expression (anonymus)
const mul = function (num1, num2) {
  return num1 * num2;
};
console.log(mul(12, 10));

// arrow function
const div = (num1, num2) => num1 / num2;
console.log(div(10, 2));
