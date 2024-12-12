"use strict";

// Request distance from the user
var distance = prompt("Enter the distance between the cities in kilometers:");
var time = prompt("Enter the time (in hours) you want to travel within:"); // Calculate the speed

var speed = distance / time; // Display the result

alert("You need to maintain a speed of ".concat(speed, " km/h to arrive on time."));