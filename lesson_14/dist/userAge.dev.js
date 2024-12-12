"use strict";

var currentYear = new Date().getFullYear(); // Retrieve the current year

var birthYear = prompt("Enter your birth year:"); // Ask the user for their birth year

var age = currentYear - birthYear; // Calculate the age

alert("You are ".concat(age, " years old.")); // Display the result