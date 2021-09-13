const priya = "Asif Akbot";
const maye = "Maye tumi ki dukkho chino";
const kobika = `Kobita tumi shopno charini`; //back tik, back quote, karret

const multiLine =
  "this is my first line \n" +
  "this is my second line \n" +
  "this is my third line" +
  "this is my fourth line";

console.log(multiLine);

const multiLineNew = `this is multi line
this a new line
this is another line
this is different line`;
console.log(multiLineNew);

const count = 5;
const old = '<h3 class = "friend-name">friend-5</h3>';
const old2 = '<h3 class = "friend-name">friend-' + count + "</h3>";
const new1 = `<h3 class = "friend-name">friend-${count}</h3>`;

// console.log(new1);

const friends = ["abul", "kabul", "babul", "habul"];
const new2 = `<h3 class = "friend-name">friend-${friends.length}</h3>`;
// console.log(new2);

const first = "Mamun";
const second = "Chowdhury";
const fullOld = "This person name is:" + first + " " + second;
const fullNew = `This person name is: ${first} ${second}. has money ${
  friends.length * 500
}`;
console.log(fullNew);
