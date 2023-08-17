"use strict";
function creatPyramid(row, col) {
  if (col === 0 || col === row) {
    return 1;
  } else {
    return creatPyramid(row - 1, col - 1) + creatPyramid(row - 1, col);
  }
}
function displayPyramid(numRows) {
  for (let i = 0; i < numRows; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += creatPyramid(i, j) + " ";
    }
    console.log(row);
  }
}

displayPyramid(10);
