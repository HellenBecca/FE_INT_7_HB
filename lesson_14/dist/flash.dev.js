"use strict";

// Ask the user to enter the capacity of the flash drive in GB
var flashDriveGB = prompt("Enter the flash drive's capacity in GB:"); // Convert GB to MB

var flashDriveMB = flashDriveGB * 1024;
var fileSizeMB = 820;
var fileCount = flashDriveMB / fileSizeMB; // Result

alert("You can store ".concat(fileCount, " 820MB files on the flash drive."));