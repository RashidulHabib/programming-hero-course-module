function oddEven(number) {
  if (number % 2 == 0) {
    console.log(number + " is a even number");
    return "You can take the icecream";
  } else {
    console.log(number + " is a odd number");
    return "You can have biscuits";
  }
}

let givenNumber = oddEven(122);
console.log(givenNumber);
