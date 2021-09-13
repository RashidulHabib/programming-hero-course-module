// var i = 0;
// while (i < 15) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
//   i++;
// }

// for (var i = 0; i < 19; i++) {
//   console.log(i);
//   if (i * 3 == 15) {
//     break;
//   }
// }

var numbers = [155, 888, 354, 45, 5, 6, 745, 8, 9];

// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   if (numbers[i] < 10) {
//     break;
//   }
// }

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 90) {
    continue;
  }
  console.log(number);
}
