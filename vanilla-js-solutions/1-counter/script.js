// Selecting the button element by its ID
let button = document.getElementById("counterButton");

// Initializing the counter
let counter = 0;

// Adding a click event listener to the button
button.addEventListener("click", function () {
  // Increment the counter
  counter++;

  // Update the button text with the new counter value
  button.textContent = "Count is " + counter;
});
