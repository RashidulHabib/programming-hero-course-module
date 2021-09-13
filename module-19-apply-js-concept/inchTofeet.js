function inchToFeet(inches) {
  var feet = inches / 12;
  return feet;
}

var myinches = 100;
var feet = inchToFeet(myinches);
console.log("my inch to feet is: " + feet);

// mile to kilomiter
function mileTOKilo(mile) {
  var kilomiter = mile * 1.6093;
  return kilomiter;
}

var toldMile = 20;
var km = mileTOKilo(toldMile);
console.log(toldMile + " mile to kilomiter is: " + km);
