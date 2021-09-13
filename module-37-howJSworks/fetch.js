console.log(111111);
console.log(222222);
setTimeout(() => console.log("aaaaa"), 4000);
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
console.log(3333333);
console.log(44444444);

for (let i = 0; i < 5; i++) {
  console.log(i);
}
