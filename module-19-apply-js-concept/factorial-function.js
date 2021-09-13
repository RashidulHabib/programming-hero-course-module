function factorial(givenNumber) {
  let fact = 1;
  for (var i = 1; i <= givenNumber; i++) {
    fact = fact * i;
  }
  return fact;
}

var getFactorial = factorial(6);
console.log(getFactorial);
