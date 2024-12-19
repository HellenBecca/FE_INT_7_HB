// Declares num1 and assign the parsed float value from user input
let num1 = parseFloat(prompt("please enter your first number:"));

// Validates num1
while (isNaN(num1)) {
  alert("Invalid input for Number 1. Please enter a valid number.");
  num1 = parseFloat(prompt("Number 1:"));
}

// Ask the user to choose a mathematical operation and store it in "action" variable.
let action = prompt("Choose an action: +, -, /, or *");


// Validates action
while (action !== "+" && action !== "-" && action !== "/" && action !== "*") {
  alert("Invalid action. Please enter +, -, /, or *.");
  action = prompt("Choose an action: +, -, /, or *");
}

// Declares num2 and assign the parsed float value from user input
let num2 = parseFloat(prompt("please enter your second number:"));

// Validates num2 and if division with 0, display an error message
while (isNaN(num2) || (action === "/" && num2 === 0)) {
  if (isNaN(num2)) {
    alert("Invalid input for Number 2. Please enter a valid number.");
  } else if (action === "/" && num2 === 0) {
    alert("Error: Division by zero is not allowed. Please enter a number other than 0.");
  }
  num2 = parseFloat(prompt("Number 2:"));
}
// Performs calculation
let result;

if (action === "+") {
  result = (num1 + num2).toFixed(2);;
} else if (action === "-") {
  result = (num1 - num2).toFixed(2);;
} else if (action === "*") {
  result = (num1 * num2).toFixed(2);;
} else if (action === "/") {
  result = (num1 / num2).toFixed(2);;
}
// "else" as an ending point is not used here because all valid operations (+, -, *, /) are explicitly checked.


// Displays result
console.log(`The result is: ${result}`);
alert(`The result is: ${result}`);
