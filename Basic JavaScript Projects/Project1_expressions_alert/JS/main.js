// Sent1 holds the first part of the sentence as a string
const Sent1 = "This is the beginning of the string";

// Sent2 holds the second part of the sentence as a string
const Sent2 = " and this is the end of the string";

// Concatenate Sent1 and Sent2 into a single string
const fullSentence = Sent1 + Sent2;

// Write an expression (simple arithmetic) and store the result
// This demonstrates evaluating an expression in JavaScript
const result = 7 * (3 + 2); // 7 times 5 = 35

// Show the concatenated sentence in an alert dialog
window.alert(fullSentence);

// Write both the concatenated sentence and the expression result to the document
document.write("<p>" + fullSentence + "</p>");
document.write("<p>Result of the expression 7 * (3 + 2) = " + result + "</p>");
