let gf = 5;
let bf = 7;
let tempo = 0;
console.log(gf, bf);

// first process
// tempo = gf;
// gf = bf;
// bf = tempo;
// console.log(gf, bf);

// destructuring
[gf, bf] = [bf, gf];
console.log(gf, bf);
