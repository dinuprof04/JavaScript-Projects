// Dictionary (object) with key–value pairs
var person = {
  firstName: "Ada",
  lastName: "Lovelace",
  role: "Mathematician",
  year: 1843
};

// Function called by the onclick handler
function showDictionary() {
  // Collect the object’s keys into an array
  var keys = Object.keys(person);          // e.g., ["firstName","lastName","role","year"]

  // Generate a random integer from 0 up to keys.length - 1
  var idx = Math.floor(Math.random() * keys.length);

  // Use the random key to get its value
  var randomKey = keys[idx];
  var value = person[randomKey];

  // Output "key: value" into the element with id "Dictionary"
  document.getElementById("Dictionary").innerHTML = randomKey + ": " + value;
}
