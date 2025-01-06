"use strict";

//1. Write all possible variants of creating functions.
// Function Declaration
// Best for global or reusable functions that need to be accessible throughout the file
function greet() {
  alert('Hello World!');
}

greet(); //Function Parameters.
// Parameters are placeholders in a function definition to receive input values (arguments) when the function is called.
// Makes functions reusable and handle dynamic input.

function greet1(name) {
  alert("Hello, ".concat(name, "!"));
}

greet1('Jane'); // Function Expression
// Often used for callbacks, such as event handling

var greet2 = function greet2() {
  alert('Hello there!');
};

greet2(); // Example of Function Expression in an event listener
//function handler() {
//alert( 'Thanks!' );
//}
//input.addEventListener("click", handler);
// ....
//input.removeEventListener("click", handler);
// Arrow Function
// Great for short, concise functions, especially with array methods

var getRectArea = function getRectArea(width, height) {
  return width * height;
};

console.log(getRectArea(24, 5)); //2. Create a function that will print the number of arguments passed to it.

function sum() {
  var total = 0;

  for (var _len = arguments.length, theArgs = new Array(_len), _key = 0; _key < _len; _key++) {
    theArgs[_key] = arguments[_key];
  }

  for (var _i = 0, _theArgs = theArgs; _i < _theArgs.length; _i++) {
    var arg = _theArgs[_i];
    total += arg;
  }

  return total;
}

console.log(sum(1, 2, 3)); // Expected output: 6

console.log(sum(1, 2, 3, 4)); // Expected output: 10
//4. Write a function that takes three separate digits and converts them into one number. 
// For example: the digits 1, 4, 9 will be converted to the number 149.

function combineDigits(digit1, digit2, digit3) {
  // Multiply each digit to place them in the correct decimal position
  return digit1 * 100 + digit2 * 10 + digit3;
} // Test the function


console.log(combineDigits(1, 4, 9)); // Output: 149

console.log(combineDigits(7, 2, 5)); // Output: 725
//5. Write a function that takes the length and width of a rectangle and calculates its area. 
// If you pass 1 parameter to the function, it calculates the area of the square
// Default parameters are used to assign a default value to a parameter if no argument is provided or if the argument is undefined.
// In this function, the 'width' parameter defaults to the value of 'length', making it handle both squares and rectangles.

function calculateArea(length) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : length;
  return length * width; // If 'width' is not provided, it defaults to 'length' (square area).
}

console.log(calculateArea(5, 10)); // Output: 50 (Rectangle: 5 * 10)

console.log(calculateArea(6)); // Output: 36 (Square: 6 * 6)