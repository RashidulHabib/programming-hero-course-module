// NOTE: var
var tester = "hey hi";

function newFunction() {
  var hello = "hello";
}
console.log(hello); // error: hello is not defined
var greeter = "hey hi";
greeter = "say Hello instead";

// NOTE: let
// let is block scoped
let greeting = "say Hi";
let times = 4;

if (times > 3) {
  let hello = "say Hello instead";
  console.log(hello); // "say Hello instead"
}
console.log(hello); //Output: hello is not defined

let greeting = "say Hi";
greeting = "say Hello instead";
// let can be updated but not re-declared.
let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// However, if the same variable is defined in different scopes, there will be no error:
let greeting = "say Hi";
if (true) {
  let greeting = "say Hello instead";
  console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"
// Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

// NOTE: const
// const declarations are block scoped
// const cannot be updated or re-declared
const greeting = "say Hi";
greeting = "say Hello instead"; // error: Assignment to constant variable.

const greeting = "say Hi";
const greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// While a const object cannot be updated, the properties of this objects can be updated.
const greeting = {
  message: "say Hi",
  times: 4,
};
// while we cannot do this:
greeting = {
  words: "Hello",
  number: "five",
}; // error:  Assignment to constant variable.

// we can do this:
greeting.message = "say Hello instead";

// ust like let, const declarations are hoisted to the top but are not initialized
