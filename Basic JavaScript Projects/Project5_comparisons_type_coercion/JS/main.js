// Display the data type of a variable using document.write() and typeof
// Choose any variable; here we use a string
var myVar = "hello";
// typeof returns the type as a string, e.g., "string"
document.write("<p>Type of myVar: " + typeof myVar + "</p>");

// Write an expression combining a string and a number
// In JavaScript, + with a string performs concatenation
var combined = "Score: " + 42;
document.write("<p>String + number: " + combined + "</p>");

// Demonstrate comparison and logical operators and display results

// == (loose equality) compares after type coercion
document.write("<p>5 == '5' => " + (5 == "5") + "</p>");

// === (strict equality) compares without type coercion (type must also match)
document.write("<p>5 === '5' => " + (5 === "5") + "</p>");

// > (greater than)
document.write("<p>7 > 3 => " + (7 > 3) + "</p>");

// < (less than)
document.write("<p>2 < 1 => " + (2 < 1) + "</p>");

// && (logical AND) — both sides must be true
document.write("<p>(true && false) => " + (true && false) + "</p>");

// || (logical OR) — at least one side must be true
document.write("<p>(true || false) => " + (true || false) + "</p>");

// ! (logical NOT) — flips a boolean value
document.write("<p>!false => " + (!false) + "</p>");
