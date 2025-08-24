// Utility: set text by element id
function setOut(id, text) {
  document.getElementById(id).textContent = text;
}

// + Addition
function doAdd() {
  // Add two numbers with +
  var a = 12;
  var b = 8;
  var sum = a + b;
  setOut("out-add", a + " + " + b + " = " + sum);
}

// - Subtraction
function doSubtract() {
  // Subtract with -
  var a = 20;
  var b = 13;
  var diff = a - b;
  setOut("out-sub", a + " - " + b + " = " + diff);
}

// * Multiplication
function doMultiply() {
  // Multiply with *
  var a = 7;
  var b = 6;
  var product = a * b;
  setOut("out-mul", a + " * " + b + " = " + product);
}

// % Modulo
function doMod() {
  // Remainder with %
  var a = 29;
  var b = 5;
  var remainder = a % b;
  setOut("out-mod", a + " % " + b + " = " + remainder);
}

// Counters for ++ and -- (using var)
var incCounter = 0;
var decCounter = 0;

// ++ Increment
function doIncrement() {
  // Increase by 1 with ++
  incCounter++;
  setOut("out-inc", "Incremented counter: " + incCounter);
}

// -- Decrement
function doDecrement() {
  // Decrease by 1 with --
  decCounter--;
  setOut("out-dec", "Decremented counter: " + decCounter);
}

// Math.random
function doRandom() {
  // Random float in [0,1)
  var r = Math.random();

  // Example integer 0-99
  var int0to99 = Math.floor(r * 100);

  // Example integer in [min, max]
  var min = 10;
  var max = 20;
  var ranged = Math.floor(Math.random() * (max - min + 1)) + min;

  setOut(
    "out-rand",
    "raw: " + r.toFixed(6) + ", 0-99: " + int0to99 + ", " + min + "-" + max + ": " + ranged
  );
}
