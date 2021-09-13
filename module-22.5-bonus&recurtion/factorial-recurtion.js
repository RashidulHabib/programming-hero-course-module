/* let fact = 1;
for (let i = 6; i >= 1; i--) {
  fact = fact * i;
}
console.log(fact); */

function factorial(number) {
  if (number == 1) {
    return 1;
  }
  return number * factorial(number - 1);
}
console.log(factorial(6));
