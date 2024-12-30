
//1. Ask the user for their age and determine whether they are a child (0-11), teenager (12-17), adult (18_59), or pensioner (60...), and allow for the possibility of entering incorrect data.
let age = prompt("Please enter your age");

// Checks if input is null, empty or left the input empty (including spaces)
if (age === null || age === "" || age.match(/^\s*$/)) {
    alert("Input canceled");
} else {
    age = Number(age); // Converts to number
    if (isNaN(age) || age < 0) {
        alert("Invalid input. Please enter a valid number.");
    } else if (age >= 0 && age <= 11) {
        alert("You are a child");
    } else if (age >= 12 && age <= 17) {
        alert("You are a teenager");
    } else if (age >= 18 && age <= 59) {
        alert("You are an adult.");
    } else if (age >= 60) {
        alert("You are a pensioner");
    } else {
        alert("Invalid age range");
    }
}

    
// 2. Array to store special characters corresponding to numbers 0-9
const specialCharacters = ["!", "@", "#", "$", "%", "&", "/", "(", ")", "="];

// Starts a for loop to allow the user up to 3 attempts to input a valid number
for (let attempts = 0; attempts < 3; attempts++) {
  // Ask the user to enter a number between 0 and 9
  let number = prompt("Enter a number from 0 to 9:");

  // Checks if the user clicked "Cancel" or left the input empty (including spaces)
  if (number === null || number.match(/^\s*$/)) {
    alert("Input canceled."); // Inform the user that the input was canceled
    break; // Exits the loop if the task is complete
  }

  // Convert the input to a number directly
  number = Number(number);

  // Validates the input: check if it is a number and within the range 0-9
  if (!isNaN(number) && number >= 0 && number <= 9) {
   // Displays a message showing how the special character is corresponding with the entered number.
    alert("The special character for " + number + " is \"" + specialCharacters[number] + "\".");
    break; // Exits the loop if the task is complete
  } else {
    // If the input is invalid,  the user is informed and is asked for another attempt
    alert("Invalid input. Please enter a number between 0 and 9.");
    
    // If this is the last attempt (attempts === 2), the user is informed
    if (attempts === 2) {
      alert("Too many invalid attempts. Goodbye!");
    }
  }
}

// 3. Initializing the range

  // Example: Step-by-step simulation if the user thinks of 40:
    // After "< 50", range is 0–49 -> guess = Math.floor((0 + 49) / 2) = 24
    // If "> 24", range becomes 25–49 -> guess = Math.floor((25 + 49) / 2) = 37
    // If "> 37", range becomes 38–49 -> guess = Math.floor((38 + 49) / 2) = 43
    // If "< 43", range becomes 38–42 -> guess = Math.floor((38 + 42) / 2) = 40

let low = 0; // Lowest possible number
let high = 100; // Highest possible number
let guess = Math.floor((low + high) / 2); // Initial guess is the middle of the range

// The loop for guessing
while (true) {
    // Asking the user for feedback about the guess
    let response = prompt(`Is your number > ${guess}, < ${guess}, or == ${guess}? (Enter >, <, or ==)`);

    // Step-by-step simulation if the user thinks of the number, let say 40:
    // Example 1: Initial guess is 50
    if (response === ">") {
        // User's number is greater than the guess
        low = guess + 1; // Binary search
        // New range: low = 51, high = 100
    } else if (response === "<") {
        // User's number is less than the guess
        high = guess - 1; // Binary search
        // Example: high = 49 (New range: 0–49)
    } else if (response === "==") {
        // If the guess is correct
        alert(`Great! The number is ${guess}.`); 
        break;
    } else {
        // If the input is invalid,show an error message
        alert("Invalid input. Please enter >, <, or ==."); 
    }

    // Recalculate the midpoint for the next guess
   
    guess = Math.floor((low + high) / 2);
   
}


