"use strict";
let table = document.getElementById("dynamicTable");

function createTable(rows, cols) {
  let number = 1;
  for (let i = 0; i < rows; i++) {
    let tableRow = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      let tableCell = document.createElement("td");
      tableCell.textContent = number++;
      tableRow.appendChild(tableCell);
    }
    table.appendChild(tableRow);
  }
}
createTable(10, 10);
