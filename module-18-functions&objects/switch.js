// NOTE: take input from usear
// TODO: (npm install prompt-sync) run this in terminal to get prompt option in IDM.
// TODO: after run the command ... use this line to initiate the command
const prompt = require("prompt-sync")();

//REVIEW: now you can use this prompt function to get input from IDM Treminal
var color = prompt("write a color name: red, blue, white:   ");

// if (color == "blue") {
//   console.log("color is blue");
// } else if (color == "red") {
//   console.log("color is red");
// } else if (color == "white") {
//   console.log("color is white");
// } else {
//   console.log("Unknown color");
// }

// using switch case

switch (color) {
  case "blue":
    console.log("color is blue");
    break;
  case "red":
    console.log("color is red");
    break;
  case "white":
    console.log("color is white");
    break;
  default:
    console.log("Unknown color");
}
