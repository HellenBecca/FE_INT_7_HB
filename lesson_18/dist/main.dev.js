"use strict";

// 1. Create an array using an array literal
// The array `groceriesList` contains objects with the properties `name`, `amount`, and `bought`.
var groceriesList = [{
  name: "Milk",
  amount: 2,
  bought: false
}, {
  name: "Bread",
  amount: 1,
  bought: true
}, {
  name: "Eggs",
  amount: 12,
  bought: false
}, {
  name: "Apples",
  amount: 5,
  bought: true
}, {
  name: "Cheese",
  amount: 1,
  bought: false
}]; // 2. Add a new object to the array using `push()`
// This is used to dynamically add more objects to the array.

groceriesList.push({
  name: "Bananas",
  amount: 6,
  bought: false
}); // Print the list

console.log(groceriesList); // 2. displayGroceries()

function displayGroceries() {
  // Sort so that "bought: false" appears first
  groceriesList.sort(function (a, b) {
    return a.bought - b.bought;
  });
  console.log("Groceries List:");
  groceriesList.forEach(function (item) {
    return console.log("".concat(item.amount, "x ").concat(item.name, " (Bought: ").concat(item.bought, ")"));
  });
} //console.log(groceriesList);
// 2. addItem(name, amount)


function addItem(name, amount) {
  // Check if the object already exists in the list
  var existingItem = groceriesList.find(function (item) {
    return item.name === name;
  });

  if (existingItem) {
    // If it exists, increase the amount
    existingItem.amount += amount;
  } else {
    // Otherwise, add a new object
    groceriesList.push({
      name: name,
      amount: amount,
      bought: false
    });
  }
} // 3. purchaseItem(name)


function purchaseItem(name) {
  // Find the item in the list
  var item = groceriesList.find(function (item) {
    return item.name === name;
  });

  if (item) {
    // Mark as purchased
    item.bought = true;
  } else {
    console.log("".concat(name, " is not in the list."));
  }
} // Test the functions


addItem("Butter", 1);
addItem("Milk", 2);
purchaseItem("Bread");
displayGroceries(); //console.log(groceriesList);