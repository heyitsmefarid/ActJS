// Starter examples (function output expectations are provided in README)

const makeMultiplier = (factor) => (num) => num * factor;

const double = makeMultiplier(2);
console.log(double(5)); 
const triple = makeMultiplier(3);
console.log(triple(4)); 

console.log("------------------------------------------------------");

const makeGreeter = (greeting) => (name) => `${greeting}, ${name}!`;

const sayHi = makeGreeter("Hi");
console.log(sayHi("Mia"));   
const sayHello = makeGreeter("Hello");
console.log(sayHello("Fred")); 