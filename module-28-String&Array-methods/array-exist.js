function megaFriend(friends) {
  if (Array.isArray(friends) == false) {
    return "Please provide an array";
  }
  let mega = friends[0];
  for (const friend of friends) {
    if (friend.length > mega.length) {
      mega = friend;
    }
  }
  return mega;
}

const friends = ["kutub", "Lion", "sabbir", "halim", "nosib"];
// const myBigBuddy = megaFriend(friends);
const myBigBuddy = megaFriend(124556);
console.log(myBigBuddy);
// -----------------------------------------------

const friends = ["kutub", "Lion", "sabbir", "halim", "nosib"];
// NOTE: lion নামে কেও আছে কি না, চেক করো
// indesOf()
if (friends.indexOf("fox") != -1) {
  //যদি index -1 নাহয়...
  console.log("lion exists");
} else {
  console.log("Lion doesn't exists");
}

// REVIEW: another way to check
// includes()
if (friends.includes("Lion")) {
  // যদি lion friends এর মধ্যে থাকে...
  console.log("lion exist using incluses()");
}

// concatination =>concat('')
const first = [1, 2, 4];
const second = [4, 6, 7, 8];
const combo = first.concat(" ").concat(second).concat(" jora lage gace... ");
console.log(combo);
