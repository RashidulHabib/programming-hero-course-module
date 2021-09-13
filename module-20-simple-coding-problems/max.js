const business = 4633446;
const minister = 6536464;
const army = 7353646464;

// simple methode
// if (business > minister) {
//   console.log("business is bigger");
// } else {
//   console.log("Minister is bigger");
// }

// compare three
/* if (business > minister && business > army) {
  console.log("Business is bigger");
} else if (minister > business && minister > army) {
  console.log("minister is bigger");
} else {
  console.log("army is bigger");
} */

// use math library
/* var max = Math.max(business, minister, army);
console.log(max); */

// min among three using function
function minimumInThree(first, second, third) {
  if (first < second && first < third) {
    return "First is the smallest number";
  } else if (second < first && second < third) {
    return "second is the smallest number";
  } else {
    return "third is the smallest number";
  }
}

var smallest = minimumInThree(64664456568678, 4646464, 133786313);
console.log(smallest);
