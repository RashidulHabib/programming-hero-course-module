function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
function loadUsears() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayUsears(data));
}
function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function displayUsears(data) {
  const ul = document.getElementById("users");

  for (const user of data) {
    // console.log(user.name);
    const li = document.createElement("li");
    li.innerText = `name: ${user.name} || email: ${user.email}`;
    ul.appendChild(li);
  }
}
