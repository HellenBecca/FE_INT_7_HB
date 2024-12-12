// Request user input
const deposit = prompt("Enter the amount of your bank deposit, no need to specify the currency. (for 2 months):");

// Annual interest rate (5%)
const annualInterestRate = 0.05;

// Calculate the interest for 2 months
const interest = deposit * annualInterestRate * (2 / 12);

// Display the result
alert(`The interest for 2 months is ${interest} SEK.`);