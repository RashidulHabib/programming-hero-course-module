function leapYear(year) {
  //have to divided by 4. then-
  if (year % 4 == 0) {
    //first condition then if divided be 100 then not leapYear
    if (year % 100 == 0) {
      //divided by 4.divided by 100 but divided by 400... then leapYear
      if (year % 400 == 0) {
        console.log(year + " This is a leap year");
      }
      ////divided by 4.divided by 100 but not divided by 400... then not leapYear
      else {
        console.log(year + " Not a leap year");
      }
    }
  }
  //first condition is not true; then not leapYear...
  else {
    console.log(year + " Not a leap year");
  }
}

let checkYear = leapYear(1303);
console.log(checkYear);
