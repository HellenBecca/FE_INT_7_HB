"use strict";

// Request a three-digit number from the user
var number = prompt("Enter a three-digit number:"); // Checks if it is a three-digit number

if (number.length === 3 && !isNaN(number)) {
  // Splits the digits
  var firstDigit = number[0];
  var secondDigit = number[1];
  var thirdDigit = number[2]; /// Checks if all the digits are identical

  if (firstDigit === secondDigit && secondDigit === thirdDigit) {
    console.log("All the digits are identical !");
  } else {
    console.log("The digits are not identical.");
  }
} else {
  //Invalid input.
  console.log("You must enter a valid three-digit number.");
}