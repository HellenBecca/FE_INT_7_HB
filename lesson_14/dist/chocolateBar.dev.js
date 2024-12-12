"use strict";

// Request the user's input
var money = prompt("How much money do you have in your wallet? No need to specify the currency.");
var pricePerBar = prompt("How much does a chocolate bar cost?"); // Calculate the number of chocolate bars and the change

var numberOfBars = money / pricePerBar; // Integer division

var change = money % pricePerBar; // modulus
// Result

alert("You can buy ".concat(numberOfBars, " chocolate bars and have ").concat(change, " SEK left."));