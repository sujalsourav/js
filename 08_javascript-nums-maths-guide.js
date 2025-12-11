const score = 400
// console.log(score);  -> 400

const balance = new Number(100)
// console.log(balance); -> [Number: 100]

/ console.log(balance.toString().length); -> 3
// console.log(balance.toFixed(1)); -> 100.0

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));  -> 123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  ->10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);  -> Object [Math] {}
// console.log(Math.abs(-4));   -> 4
// console.log(Math.round(4.6));  -> 5
// console.log(Math.ceil(4.2));  -> 5
// console.log(Math.floor(4.9));  -> 4
// console.log(Math.min(4, 3, 6, 8));  -> 3 
// console.log(Math.max(4, 3, 6, 8));  -> 8 

console.log(Math.random());  -> 0.24018207983544548 (random number between 0 to 10)
console.log((Math.random()*10) + 1);  -> number can be 0 so o multiply 10 will give 0, so to avoid this we will add (+ 1) t0 it.
console.log(Math.floor(Math.random()*10) + 1);  -> to avoid the decimal values or to get  a single number

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  -> formulae , very important.
