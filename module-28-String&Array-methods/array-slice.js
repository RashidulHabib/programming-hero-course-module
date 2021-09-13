const numbers = [3, 54, 6, 7, 8, 9, 56, 21, 45, 67, 89];
// slice
const numberSliced = numbers.slice(4, 10);
// console.log(numberSliced);

/* NOTE: splice to remove an eliment from an array
const numberSpliced = numbers.splice(4, 2);
console.log(numberSpliced);
console.log(numbers); */

//
// const numberSpliced2 = numbers.splice(4, 2, 13, 22);
const numberSpliced2 = numbers.splice(4, 0, 13, 22);
console.log(numberSpliced2);
console.log(numbers);
