const numbers = [234, 546, 7, 56, 234];
// numbers = [435, 63, 63, 63]; //not allowed
numbers.push(52); //allowed
numbers[1] = 333; //allowed

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

const student = {
  roll: 23,
  name: "Vodai",
  job: "student",
};
student.name = "Roshid";
// student = { name: "Mofazzal" }; //not allowed
