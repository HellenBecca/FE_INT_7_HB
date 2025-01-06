
// 1. Create an array using an array literal
// The array `groceriesList` contains objects with the properties `name`, `amount`, and `bought`.
const groceriesList = [
    { name: "Milk", amount: 2, bought: false },
    { name: "Bread", amount: 1, bought: true },
    { name: "Eggs", amount: 12, bought: false },
    { name: "Apples", amount: 5, bought: true },
    { name: "Cheese", amount: 1, bought: false },
  ];

// 2. Add a new object to the array using `push()`
// This is used to dynamically add more objects to the array.
groceriesList.push({ name: "Bananas", amount: 6, bought: false });
  
 // Print the list
 console.log(groceriesList);


  // 2. displayGroceries()
  function displayGroceries() {
  // Sort so that "bought: false" appears first
  groceriesList.sort((a, b) => a.bought - b.bought);
  console.log("Groceries List:");
  groceriesList.forEach(item =>
  console.log(`${item.amount}x ${item.name} (Bought: ${item.bought})`)
  );
}
  
//console.log(groceriesList);

// 2. addItem(name, amount)
function addItem(name, amount) {
  // Check if the object already exists in the list
  const existingItem = groceriesList.find(item => item.name === name);
  if (existingItem) {
    // If it exists, increase the amount
    existingItem.amount += amount;
  } else {
    // Otherwise, add a new object
    groceriesList.push({ name, amount, bought: false });
  }
}

// 3. purchaseItem(name)
function purchaseItem(name) {
  // Find the item in the list
  const item = groceriesList.find(item => item.name === name);
  if (item) {
    // Mark as purchased
    item.bought = true;
  } else {
    console.log(`${name} is not in the list.`);
  }
}

// Test the functions
addItem("Butter", 1); 
addItem("Milk", 2); 
purchaseItem("Bread"); 
displayGroceries(); 
//console.log(groceriesList);
