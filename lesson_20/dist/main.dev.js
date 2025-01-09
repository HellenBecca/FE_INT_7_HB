"use strict";

//1. Create an object that describes a car (manufacturer, model, year of release, average speed) 
//and the following methods for working with this object:
//Create the car object 
// The car object is static, representing a single car with fixed properties. 
var car = {
  manufacturer: "Toyota",
  model: "Corolla",
  year: 2000,
  avarageSpeed: 100,
  //km/h
  //Dispaly car info
  displayCarInfo: function displayCarInfo() {
    console.log("this.manufacturer;".concat(this.manufacturer));
    console.log("this.model;".concat(this.model));
    console.log("this.year;".concat(this.year));
    console.log("this.avarageSpeed;".concat(this.avarageSpeed));
  },
  //method for counting a time frame
  calculateTime: function calculateTime(distance) {
    var drivingHours = distance / this.avarageSpeed; // Total driving time in hours

    var breaks = Math.floor(drivingHours / 4); // 1 hour break per 4th hour 

    var totalHours = drivingHours + breaks;
    return totalHours.toFixed(2); // 2 decimales
  }
}; //Display result call function

car.displayCarInfo();
console.log("Time required for 300 km: ".concat(car.calculateTime(300), " hours")); //2.Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object: 

var time = {
  hours: 20,
  minutes: 30,
  seconds: 45,
  // Method: Show time in format HH:MM:SS
  displayTime: function displayTime() {
    console.log("".concat(this.hours.toString().padStart(2, "0"), ":").concat(this.minutes.toString().padStart(2, "0"), ":").concat(this.seconds.toString().padStart(2, "0")) //The padStart() method of String values pads this string with another string
    );
  },
  // Method: Add seconds
  addSeconds: function addSeconds(secondsToAdd) {
    this.seconds += secondsToAdd; // Handle overflow to minutes and hours 

    if (this.seconds >= 60) {
      this.minutes += Math.floor(this.seconds / 60);
      this.seconds %= 60;
    }

    if (this.minutes >= 60) {
      this.hours += Math.floor(this.minutes / 60);
      this.minutes %= 60;
    }

    if (this.hours >= 24) {
      this.hours %= 24; // Limit hours to 0–23
    }
  },
  // Method: Add minutes
  addMinutes: function addMinutes(minutesToAdd) {
    this.addSeconds(minutesToAdd * 60); // Convert minutes to seconds 
  },
  // Method: Add hours
  addHours: function addHours(hoursToAdd) {
    this.addSeconds(hoursToAdd * 3600); // Convert hours to seconds
  }
}; // Test:

time.displayTime(); // Original time: 20:30:45

time.addSeconds(20); // Add 20 seconds

time.displayTime(); // New time: 20:31:05

time.addMinutes(45); // Add 45 minutes

time.displayTime(); // New time: 21:16:05

time.addHours(5); // Add 5 hours

time.displayTime(); // New time: 02:16:05
//Alternative method with time as an object.
// The time object is dynamic, JavaScript's Date object for efficient time manipulation.

/*
const time = {
  date: new Date(2025, 0, 1, 20, 30, 45),

  displayTime() {
    console.log(this.date.toLocaleTimeString("en-GB"));
  },

  addSeconds(secondsToAdd) {
    this.date.setSeconds(this.date.getSeconds() + secondsToAdd);
  },

  addMinutes(minutesToAdd) {
    this.date.setMinutes(this.date.getMinutes() + minutesToAdd);
  },

  addHours(hoursToAdd) {
    this.date.setHours(this.date.getHours() + hoursToAdd);
  },
};

// Test 
time.displayTime();
time.addSeconds(30);
time.displayTime();
time.addMinutes(45);
time.displayTime();
time.addHours(5);
time.displayTime();
*/