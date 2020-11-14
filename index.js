const fs = require('fs');

let asce = fs.readFileSync(`${__dirname}/data/asce.dat`).toString().split("\n");
let rand = fs.readFileSync(`${__dirname}/data/rand.dat`).toString().split("\n");
let desc = fs.readFileSync(`${__dirname}/data/desc.dat`).toString().split("\n");

console.log(asce)
console.log(rand)
console.log(desc)