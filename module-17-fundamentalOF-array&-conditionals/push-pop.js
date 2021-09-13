var lastBench = ["kalam", "balam", "salam01"];
// NOTE: push to include new eliment
lastBench.push("molom");
lastBench.push("palam");
// console.log(lastBench);

var friendsAge = [11, 12, 13, 14];
friendsAge.push(15, 16);
console.log(friendsAge);

// NOTE: pop will kick last eliment of the array.
friendsAge.pop();

console.log(friendsAge);

// NOTE: we can store last eliment that pop kicked out!
var lastKicked = friendsAge.pop();
console.log(friendsAge);
console.log(lastKicked);

var numbers = [1, 2, 3, 4, 5, 6];
// NOTE: shift will kick the frist eliment
numbers.shift();
console.log(numbers);
var latestNumber = numbers.shift();
console.log(numbers);
console.log(latestNumber);

// NOTE: unshift to add a number at the beginning
numbers.unshift(0);
console.log(numbers);
var firstNumber = numbers.unshift(-1);
console.log(numbers);
//REVIEW: why (firstNumber) is returning the last eliment?
console.log(firstNumber);
