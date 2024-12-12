// Request distance from the user
const distance = prompt("Enter the distance between the cities in kilometers:");

const time = prompt("Enter the time (in hours) you want to travel within:");
// Calculate the speed
const speed = distance / time;
// Display the result
alert(`You need to maintain a speed of ${speed} km/h to arrive on time.`);