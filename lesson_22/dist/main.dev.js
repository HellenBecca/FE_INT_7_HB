"use strict";

// Retrieve the div element
var div = document.getElementById('text-display');
var isEditing = false; // Keep track of the editing status

document.addEventListener('keydown', function (event) {
  // If Ctrl+E is pressed, switch to edit mode
  if (event.ctrlKey && event.key === 'e') {
    event.preventDefault(); // Prevent default behavior (e.g., browser command)

    if (!isEditing) {
      var textarea = document.createElement('textarea'); // Create text area

      textarea.value = div.innerText; // Copy text from the div

      textarea.id = 'text-editor';
      div.replaceWith(textarea); // Replace the div with a textarea

      isEditing = true; // Change status to editing
    }
  } // If Ctrl+S is pressed, save changes and switch back to view mode


  if (event.ctrlKey && event.key === 's') {
    event.preventDefault(); // Prevent default behavior

    if (isEditing) {
      var _textarea = document.getElementById('text-editor'); // Retrieve the text area


      div.innerText = _textarea.value; // Update text in the div

      _textarea.replaceWith(div); // Replace the textarea with the div


      isEditing = false; // Change status to editing
    }
  }
}); // Retrieve the table

var table = document.getElementById('sortableTable'); // Add click events to each header (th)

table.querySelectorAll('th').forEach(function (header, columnIndex) {
  header.addEventListener('click', function () {
    var tbody = table.querySelector('tbody'); // Retrieve the tbody (table body)

    var rows = Array.from(tbody.querySelectorAll('tr')); // Retrieve all rows in the tbody
    // Check if the column is numeric

    var isNumericColumn = !isNaN(rows[0].cells[columnIndex].innerText.trim()); // Sort rows based on content

    rows.sort(function (a, b) {
      var cellA = a.cells[columnIndex].innerText.trim();
      var cellB = b.cells[columnIndex].innerText.trim();

      if (isNumericColumn) {
        return parseFloat(cellA) - parseFloat(cellB); // Numeric sorting
      } else {
        return cellA.localeCompare(cellB); // Alphabetical sorting
      }
    }); // Rebuild the table with sorted rows

    rows.forEach(function (row) {
      return tbody.appendChild(row);
    });
  });
});