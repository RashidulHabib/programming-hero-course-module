function makeRed() {
  document.body.style.backgroundColor = "red";
}

//REVIEW: click me: green
function makeGreen() {
  document.body.style.backgroundColor = "green";
}
const clickGreen = document.getElementById("click-green");
/* 
SECTION: NOTE:just set the name of the function.
 NOTE: Don't call the function
 NOTE: If I call the function here... js file will make the call when the whole file is loded. that's why this function will be called when loding in web!! without clicking that function will exicute!!
 */
clickGreen.onclick = makeGreen;

//REVIEW: click me: blue
const clickBlue = document.getElementById("click-blue");
//------------ console.log(clickBlue);
/* SECTION:
 clickBlue.onclick = function makeBlue(){
   NOTE: If one function is not needed to be called in another place.
   Then WE can remove function name like this- 
   NOTE: This is called anonymous function. This is best practice. */
clickBlue.onclick = function () {
  document.body.style.backgroundColor = "blue";
};

// REVIEW: click me: Golden rod
const clickGoldenRod = document.getElementById("clickGoldenRod");
//----------- console.log(clickGoldenRod);
// NOTE: using entListener
// NOTE: calling function from inside....
clickGoldenRod.addEventListener("click", makeGoldenRod);

function makeGoldenRod() {
  document.body.style.backgroundColor = "goldenrod";
}

// REVIEW: click me: Indigo
const clickIndigo = document.getElementById("clickIndigo");
// NOTE: declearing anonymous function directly
clickIndigo.addEventListener("click", function () {
  document.body.style.backgroundColor = "indigo";
});

// REVIEW: click me: Light blue
// NOTE: not using variable
// NOTE: direct shortcut
document
  .getElementById("clickLightBlue")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
  });
