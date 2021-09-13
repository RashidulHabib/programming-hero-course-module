const numbers = [3, 2, 4, 7, 5, 6, 8, 9, 1];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = [
  "kutub",
  "lion",
  "sabbir",
  "halim",
  "nosib",
  "abdul",
  "chintu",
];
// const sortFriends = friends.sort();
// console.log(sortFriends);

const reversrFriends = friends.reverse();
console.log(reversrFriends);

// NOTE: number sorting
const bigNumbers = [55, 35, 77, 94, 90, 3, 7, 43, 7, 85, 9, 34, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
  return a - b;
});
console.log(sortedBigNumbers);
