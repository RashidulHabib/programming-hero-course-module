// NOTE: same function is calling the own function
function factorialRecursive(n) {
  // NOTE: This is called stopping condition
  if (n == 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

let myFactorial = factorialRecursive(5);
console.log(myFactorial);
