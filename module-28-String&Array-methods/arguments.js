function addNumbers(num1, num2) {
  //   console.log(arguments);
  //   console.log(arguments[3]);
  let result = 0;
  for (const number of arguments) {
    // console.log(number);
    result += number;
  }
  //   const result = num1 + num2;
  return result;
}

const sum = addNumbers(23, 13, 50, 100, 57, 74);
console.log(sum);

// -----------------------------------------------

function getFullname(first, last) {
  let fullName = "";
  for (const part of arguments) {
    fullName = fullName + part;
  }
  return fullName;
}
const name = getFullname("Rashidul", " ", "habib", " ", "Rupok");
console.log(name);
