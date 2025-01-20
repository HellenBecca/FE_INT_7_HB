

// Retrieve the div element
const div = document.getElementById('text-display');
let isEditing = false; // Keep track of the editing status


document.addEventListener('keydown', (event) => {
    // If Ctrl+E is pressed, switch to edit mode
    if (event.ctrlKey && event.key === 'e') {
        event.preventDefault(); // Prevent default behavior (e.g., browser command)
        if (!isEditing) {
            const textarea = document.createElement('textarea'); // Create text area
            textarea.value = div.innerText; // Copy text from the div
            textarea.id = 'text-editor';
            div.replaceWith(textarea); // Replace the div with a textarea
            isEditing = true; // Change status to editing
        }
    }

   // If Ctrl+S is pressed, save changes and switch back to view mode
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); // Prevent default behavior
        if (isEditing) {
            const textarea = document.getElementById('text-editor'); // Retrieve the text area
            div.innerText = textarea.value; // Update text in the div
            textarea.replaceWith(div); // Replace the textarea with the div
            isEditing = false; // Change status to editing
        }
    }
});




// Retrieve the table
const table = document.getElementById('sortableTable');


// Add click events to each header (th)
table.querySelectorAll('th').forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    const tbody = table.querySelector('tbody'); // Retrieve the tbody (table body)
    const rows = Array.from(tbody.querySelectorAll('tr')); // Retrieve all rows in the tbody

   // Check if the column is numeric
    const isNumericColumn = !isNaN(rows[0].cells[columnIndex].innerText.trim());

    // Sort rows based on content
    rows.sort((a, b) => {
      const cellA = a.cells[columnIndex].innerText.trim();
      const cellB = b.cells[columnIndex].innerText.trim();

      if (isNumericColumn) {
        return parseFloat(cellA) - parseFloat(cellB); // Numeric sorting
      } else {
        return cellA.localeCompare(cellB); // Alphabetical sorting
      }
    });

   // Rebuild the table with sorted rows
    rows.forEach(row => tbody.appendChild(row));
  });
});

