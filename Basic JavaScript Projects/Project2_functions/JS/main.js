// main.js

// A function that assigns two variables, concatenates them, and writes to the page
function showMessage() {

  var message = "Project 2: "
  message += "Functions and DOM access";

  // Get the paragraph by its id and set its text
  // The id must match the one used in index.html
  document.getElementById("output").textContent = message;
}
