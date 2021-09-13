let option = 10;
function add(num1, num2 = option) {
  // NOTE: if number2 is not given then
  // option1
  /* if (num2 == undefined) {
    num2 = 0;
  } */
  //   option2
  //   num2 = num2 || 0;

  const total = num1 + num2;
  return total;
}
const result = add(15);
console.log(result);
