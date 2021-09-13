// function factorial(number) {
//   let i = 1;
//   let factN = 1;
//   while (i <= number) {
//     factN = factN * i;
//     i++;
//   }
//   return factN;
// }

// let getFactorial = factorial(6);
// console.log(getFactorial);

/* //REVIEW: do while loop like this.
while(i >= 1{
    factN = factN * i;
    i--;
})
*/

/* //REVIEW: reverse for loop like this
for(var i= number; i>=1; i--){
    factN = factN* i;
}
*/

function factorial(number) {
  let i = number;
  let factN = 1;
  while (i < number + 1) {
    factN = factN * i;
    i--;
    if (i == 1) {
      break;
    }
  }
  return factN;
}

let getFactorial = factorial(6);
console.log(getFactorial);
