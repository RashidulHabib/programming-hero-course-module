var items = ["bottle", "khata", "book", "pen"];
items.indexOf("book");
items.push("phone");
items.push("ink");
items.pop();
var shiftedItems = items.shift();
items.unshift("mouse");

//conditionals
// NOTE: .length will tell what is the length of the array
if (items.length >= 4) {
  console.log("There is too many staff");
} else {
  console.log("Limited items");
}
