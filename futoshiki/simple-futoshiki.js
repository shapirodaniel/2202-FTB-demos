/* 

let's build a futoshiki validator!

rules of futoshiki are: 

- place the numbers 1 to 5 in each row and column
- no row or column can hold a repeated number
- inequalities may be stated on row:row relations and/or column:column relations

for this simple futoshiki walkthrough, we'll ignore the equalities aspect of the game...

*/

const validFutoshikiBoard = [
  // 0th index
  [1, 2, 3, 4, 5],
  // 1st index
  [3, 1, 2, 5, 4],
  // 2nd index
  [2, 4, 5, 3, 1],
  // etc
  [5, 3, 4, 1, 2],
  [4, 5, 1, 2, 3],
];

const invalidFutoshikiBoard = [
  [1, 2, 3, 4, 5],
  // double 1s in column 1, double 3s in column 2
  [1, 3, 2, 5, 4],
  [2, 4, 5, 3, 1],
  [5, 3, 4, 1, 2],
  [4, 5, 1, 2, 3],
];

// this function returns an array
// that represents one row in our total game board
function getRow(grid, rowIndex) {
  return grid[rowIndex];
}
console.log(getRow(validFutoshikiBoard, 1));

function getColumn(grid, columnIndex) {
  // we know each row is an array
  // we can use element at the columnIndex
  // of each row
  const column = [];

  // somehow, add values to my column array
  for (let i = 0; i < grid.length; i++) {
    const currentRow = getRow(grid, i);

    const value = currentRow[columnIndex];

    column.push(value);
  }

  return column;
}
console.log(getColumn(validFutoshikiBoard, 1));

let puzzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],

  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],

  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];

const firstRow = getRow(puzzle, 0);
console.log(puzzle[0]); // first row, [8, 9, 5, 7, 4, 2, 1, 3, 6]
console.log(firstRow); // first row, [8, 9, 5, 7, 4, 2, 1, 3, 6]

const firstColumn = getColumn(puzzle, 0);
console.log([puzzle[0][0], puzzle[1][0], puzzle[2][0]]);
console.log(firstColumn.slice(0, 3));

// how do you check that a given set of values are present in a data structure?
const myArray = [1, 2, 3];

// how could i check for values 1, 2, 3
// how could i check there are no repeats
// how could i check this if they're in different orders?
const candidateArray = [3, 2, 1];

// how can i compare myArray to candidateArray?
const getArrayTotal = (array) => {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    // sum each individual value
    result += array[i];
  }

  return result;
};

const evilCandidateArray = [3, 3, 0];

console.log(
  getArrayTotal(myArray),
  getArrayTotal(candidateArray),
  getArrayTotal(evilCandidateArray)
);

// Array.prototype.sort()
// modifies an array in-place and sort it in ascending order

console.log(candidateArray.sort());
console.log(candidateArray);

for (let i = 0; i < puzzle.length; i++) {
  const dereferencedRow = puzzle[i].slice();
  dereferencedRow.sort();
  console.log(dereferencedRow);
}

console.log(puzzle);
