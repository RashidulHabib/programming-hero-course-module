var mobile = {
  name: "Poco f2 pro",
  company: "Poco",
  storage: 128,
  price: 35000,
};

// NOTE: to see the full object
console.log(mobile);

// NOTE: to read any properties from the object
console.log(mobile.storage);

// REVIEW: can store one key to another variable and see
var companyName = mobile.company;
console.log("company name: ", companyName);

//NOTE: to set new property value
// mobile.price = 30000;
// console.log(mobile.price);

//REVIEW: different ways to set a value of an object property
mobile.price = 30000; //first option
mobile["price"] = 32000; //second option

var priceProperty = "price"; //third option
mobile[priceProperty] = 28000;
console.log(mobile.price);
