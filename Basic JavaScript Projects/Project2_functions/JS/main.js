// main.js

// A function that assigns two variables, concatenates them, and writes to the page
function showMessage() {
  // Assign two variables
  const part1 = "Project 2: ";
  const part2 = "Functions and DOM access";

  // Concatenate the variables
  const message = part1 + part2;

  // Get the paragraph by its id and set its text
  // The id must match the one used in index.html
  document.getElementById("output").textContent = message;
}
