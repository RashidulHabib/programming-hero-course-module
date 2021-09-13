const greetings = "Hello, how are you?";

//REVIEW: use for of loop in different way
/* function reversrString(text) {
  let reversed = "";
  for (let letter of text) {
    // console.log(letter);
    reversed = letter + reversed;
  }
  return reversed;
}
const reverse = reversrString(greetings);
console.log(reverse);
 */

//REVIEW: using descending for loop
/* function reversrString(text) {
  let newString = "";
  for (let i = text.length; i >= 0; i--) {
    newString = newString + text[i];
  }
  return newString;
}

const reverse = reversrString(greetings);
console.log(reverse);
 */

// REVIEW: make the string array
function reversrString(text) {
  /*  // NOTE: str.split() will split the string and return as an array
  var splitString = text.split("");

  // NOTE: str.reverse() will reverse the array
  var reverseArray = splitString.reverse();

  // NOTE: str.join will join all eliment of array into a string
  var joinArray = reverseArray.join(""); */

  //REVIEW: use all methode in one line
  let reverseString = text.split("").reverse().join("");

  return reverseString;
}

const reverseString = reversrString(greetings);
console.log(reverseString);
