"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Prompt the user to input a date in the format dd:mm:yy
var input = prompt("Enter a date in the format dd:mm:yy (e.g., 28:02:24):"); // the input string is splitted into day, month, and year
// Example: "28:02:23" => ["28", "02", "23"]
// .map(Number) to convert these parts into integers

var _input$split$map = input.split(":").map(Number),
    _input$split$map2 = _slicedToArray(_input$split$map, 3),
    day = _input$split$map2[0],
    month = _input$split$map2[1],
    year = _input$split$map2[2]; // Checks if the given year is a leap year
// A year is a leap year if:
// - It is divisible by 4 and not divisible by 100, OR
// - It is divisible by 400


var isLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0; // Defining the number of days in each month
// For February (index 1), 29 days if it’s a leap year; otherwise, 28 days

var daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
day++; // Checks if the day exceeds the maximum number of days in the current month
// Example: If day > 31 in January, reset day to 1 and move to the next month

if (day > daysInMonth[month - 1]) {
  day = 1; // Resets day to the first day of the next month

  month++; // Moves to the next month
} // Checks if the month exceeds 12 (December)
// Example: If month > 12, reset month to 1 (January) and increment the year


if (month > 12) {
  month = 1; // Resets month to January

  year++;
} // Format the date as strings 


var formattedDay = String(day);
var formattedMonth = String(month);
var formattedYear = String(year); // Display the next date in the format dd:mm:yy

alert("The next date is ".concat(formattedDay, ":").concat(formattedMonth, ":").concat(formattedYear));