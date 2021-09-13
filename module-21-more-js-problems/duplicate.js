const names = [
  "babul",
  "kabul",
  "hiroshima",
  "nagasaki",
  "tokio",
  "kabul",
  "nagasaki",
];

function duplicateName(name) {
  let newHolder = [];
  /* for (i = 0; i < names.length; i++) {
    if (newHolder.indexOf(names[i]) == -1) {
      newHolder.push(names[i]);
    }
  }
  return newHolder; */

  //   NOTE: this is a for of loop
  // REVIEW: useful for array
  for (const eliment of names) {
    if (newHolder.indexOf(eliment) == -1) {
      newHolder.push(eliment);
    }
  }
  return newHolder;
}
const selectedNames = duplicateName(names);
console.log(selectedNames);
