const numbers = [32, 45, 634, 2, 4, 6, 345, 75];
// console.log(numbers);
// console.log(...numbers);

// console.log(Math.max(numbers));
// console.log(Math.max(...numbers));

// numbers.push(55);
// console.log(numbers);

// const numbers2 = numbers;
// console.log(numbers2);

// const numbers2 = [numbers];
// const numbers2 = [...numbers];
// numbers.push(55);
// console.log(numbers2);

const numbers2 = [123, ...numbers, 99]; //new array from previous array, with some new elements but not doing push!

numbers.push(55);
console.log(numbers);
console.log(numbers2);
