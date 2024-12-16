// Prompt the user to input a date in the format dd:mm:yy
const input = prompt("Enter a date in the format dd:mm:yy (e.g., 28:02:24):");

// the input string is splitted into day, month, and year
// Example: "28:02:23" => ["28", "02", "23"]
// .map(Number) to convert these parts into integers
let [day, month, year] = input.split(":").map(Number);

// Checks if the given year is a leap year
// A year is a leap year if:
// - It is divisible by 4 and not divisible by 100, OR
// - It is divisible by 400
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// Defining the number of days in each month
// For February (index 1), 29 days if it’s a leap year; otherwise, 28 days
const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

day++;

// Checks if the day exceeds the maximum number of days in the current month
// Example: If day > 31 in January, reset day to 1 and move to the next month
if (day > daysInMonth[month - 1]) {
    day = 1; // Resets day to the first day of the next month
    month++; // Moves to the next month
}

// Checks if the month exceeds 12 (December)
// Example: If month > 12, reset month to 1 (January) and increment the year
if (month > 12) {
    month = 1; // Resets month to January
    year++;    
}

// Format the date as strings 
const formattedDay = String(day); 
const formattedMonth = String(month); 
const formattedYear = String(year); 

// Display the next date in the format dd:mm:yy
alert(`The next date is ${formattedDay}:${formattedMonth}:${formattedYear}`);