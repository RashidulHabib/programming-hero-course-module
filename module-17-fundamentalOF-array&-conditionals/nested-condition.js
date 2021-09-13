var danishPrice = 50;
var butterBon = 25;
var tostBuiscuit = 10;
var myBudget = 50;
var packWell = false;

// if (danishPrice < myBudget) {
//   console.log("Danish khaye Danish jabo");
// } else if (butterBon < myBudget) {
//   console.log("Bread dea cha khamu");
// } else if (tostBuiscuit < myBudget) {
//   console.log("tostBuiscuit dea muri khamu");
// } else {
//   console.log("khali cha khaya thakmu");
// }

if (danishPrice <= myBudget) {
  if (packWell == true) {
    console.log("Danish khamu aram kore");
  } else {
    console.log("machi wala Danish ami khai na");
  }
} else {
  console.log("ajke amni cha khai");
}
