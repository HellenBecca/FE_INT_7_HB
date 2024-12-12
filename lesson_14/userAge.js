const currentYear = new Date().getFullYear(); // Retrieve the current year
const birthYear = prompt("Enter your birth year:"); // Ask the user for their birth year
const age = currentYear - birthYear; // Calculate the age
alert(`You are ${age} years old.`); // Display the result
