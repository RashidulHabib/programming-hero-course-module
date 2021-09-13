// NOTE: TypeError: Assignment to constant variable.
/* const name = "ami";
name = "tumi";
console.log(name);
 */

// NOTE: SyntaxError: Unexpected identifier
/* for(let i = 0; i<10 i++){

} */

// NOTE: SyntaxError: Missing initializer in const declaration
/* const student;
console.log(student.name); */

// NOTE: TypeError: Cannot read property 'name' of undefined
/* const student = undefined;
console.log(student.name); */

const name = "ami";
try {
  name = "tumi";
} catch (error) {
  // er/ex/error
  console.log("getting error: ", error);
}
console.log(name);
