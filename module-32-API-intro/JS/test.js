document.getElementById("load-user").addEventListener("click", (user) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsears(data));
});
function displayUsears(data) {
  const ul = document.getElementById("users");
  for (const user of data) {
    console.log(user);
    const li = document.createElement("li");
    li.innerText = `name: ${user.name} || address: ${user.address} || email: ${user.email} `;
    ul.appendChild(li);
  }
}

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name);
