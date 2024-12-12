// Request the user's input
const money = prompt("How much money do you have in your wallet? No need to specify the currency.");
const pricePerBar = prompt("How much does a chocolate bar cost?");

// Calculate the number of chocolate bars and the change
const numberOfBars = money / pricePerBar; // Integer division
const change = money % pricePerBar; // modulus

// Result
alert(`You can buy ${numberOfBars} chocolate bars and have ${change} SEK left.`);
