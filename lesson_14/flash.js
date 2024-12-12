// Ask the user to enter the capacity of the flash drive in GB
const flashDriveGB = prompt("Enter the flash drive's capacity in GB:");

// Convert GB to MB
const flashDriveMB = flashDriveGB * 1024;


const fileSizeMB = 820;
const fileCount = flashDriveMB / fileSizeMB;

// Result
alert(`You can store ${fileCount} 820MB files on the flash drive.`);