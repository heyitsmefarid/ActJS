function log(message) {
  console.log(message);
  document.getElementById("output").innerHTML += message + "<br>";
}

const makeMultiplier = (factor) => (num) => num * factor;

const double = makeMultiplier(2);
log(double(5));

const triple = makeMultiplier(3);
log(triple(4));

log("------------------------------------------------------");

const makeGreeter = (greeting) => (name) => `${greeting}, ${name}!`;

const sayHi = makeGreeter("Hi");
log(sayHi("Mia"));

const sayHello = makeGreeter("Hello");
log(sayHello("Fred"));
