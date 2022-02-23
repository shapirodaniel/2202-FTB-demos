/* 
let's build a futoshiki validator!

rules of futoshiki are: 
- place the numbers 1 to 5 in each row and column
- no row or column can hold a repeated number
- inequalities may be stated on row:row relations and/or column:column relations
*/

const validFutoshikiBoard = [
  [1, 2, 3, 4, 5],
  [3, 1, 2, 5, 4],
  [2, 4, 5, 3, 1],
  [5, 3, 4, 1, 2],
  [4, 5, 1, 2, 3],
];

const futoshikiRowRelations = [null, [0, 'gt'], [4, 'lt'], [4, 'lt']];

const futoshikiColumnRelations = [
  [4, 'lt'],
  [3, 'lt'],
  [4, 'lt'],
  [1, 'gt'],
];

/* 
how to interpret relation matrices:

- relations looki "down" to next row
  eg, current col of current row relates to next col of next row

- null indicates no relation between current, next row

- each sub-array is structured [colIndex, type], 
  colIndex is a position in the row array
  type is "gt" (>) or "lt" (<) 

ROWS:
for example, the first row relation of futoshikiRowRelations is at index 1: [0, 'gt']
0 refers to the zeroth position of the second and third arrays of validFutoshikiBoard
so we're asserting that 3 'gt' 2, or 3 > 2

COLUMNS:
for example, column 1 is the zeroth position of each row derived as a separate array

in the validFutoshikiBoard above, the "first" column is:
0: [1, 3, 2, 5, 4], the second is 1: [2, 1, 4, 3, 5]

so the first column relation below is between the last index of both derived arrays
so we're asserting that 4 'lt' 5, or 4 < 5 
*/

/* 
  GOAL:
  create a function validateFutoshiki(board) 
  it should receive a matrix, or 1 x n array (of arrays of length n)
  and return a boolean that lets us know if the solution is valid or not

  for example, validateFutoshiki(validFutoshikiBoard) should yield true
*/

// how to approach a big problem?
// break it down into smaller pieces :)
// these smaller pieces are usually called "helper" functions
// we'll leverage them in the validateFutoshiki function

// we'll need a way of getting a row, and deriving a column
// so let's write those functions first
// we'll probably want to loop over our validFutoshikiBoard to check each row, column
// and we're checking for 1-5 without repeat, as well as any inequalities that need to be observed

const getRow = (board, rowIndex) => board[rowIndex];

const getColumn = (board, colIndex) => {
  const column = [];

  for (let i = 0; i < board[0].length; i++) {
    column.push(board[i][colIndex]);
  }

  return column;
};

// we'll also need a way of validating rows and columns contain numbers 1-5 without repeating a value
// since rows and columns are both arrays, we can use one function to take care of both

const validateNumbers = (rowOrColumn) => {
  let oneThroughFive = '12345';

  // copy rowOrColumn with .slice() to avoid mutating the row/column reference in the game board
  // Array.prototype.sort() sorts arrays of numbers in ascending order by default
  let sortedInput = rowOrColumn.slice().sort();

  if (sortedInput.join('') === oneThroughFive) {
    return true;
  }

  return false;
};

// finally, we'll need to check row and column relations
// since this requires different logic to check rows vs columns
// we'll create two helpers
// validateRowRelations will take four parameters:
// the rows, the colIndex, and the relation: 'gt' | 'lt' (single pipe | means "or" in this context)
const validateEqualities = (rowOrColumn1, rowOrColumn2, index, relation) => {
  console.log(rowOrColumn1, rowOrColumn2, index, relation);
  if (relation === 'gt') {
    // JS expressions that compare values return a boolean
    // so we'll return the comparison values directly
    return rowOrColumn1[index] > rowOrColumn2[index];
  } else {
    return rowOrColumn1[index] < rowOrColumn2[index];
  }
};

// finally, we can build the validation function
const validateFutoshiki = (board) => {
  // validate 1-5 on rows
  for (let i = 0; i < board.length; i++) {
    const currentRow = getRow(board, i);

    if (!validateNumbers(currentRow)) {
      console.log('invalid at 1 through 5 for row');
      return false;
    }
  }

  // validate 1-5 on columns
  for (let i = 0; i < board[0].length; i++) {
    const currentColumn = getColumn(board, i);

    if (!validateNumbers(currentColumn)) {
      console.log('invalid at 1 through 5 for column');
      return false;
    }
  }

  // validate row equalities
  for (let i = 0; i < futoshikiRowRelations.length; i++) {
    // currentRelation is an array: [ index, equalityString ]
    const currentRelation = futoshikiRowRelations[i];

    // we'll need to check for a null value here to avoid a TypeError that will occur
    // if we try to "unpack" the values from our currentRelation below
    if (currentRelation === null) {
      continue;
    }

    const index = currentRelation[0];
    const equalityString = currentRelation[1];
    const currentRow = getRow(board, i);
    const nextRow = getRow(board, i + 1);

    // to compare adjacent rows, we'll need to leverage
    // the current index of our loop as well as the next index
    // which are at i and i + 1
    if (!validateEqualities(currentRow, nextRow, index, equalityString)) {
      console.log('invalid at check row relation');
      return false;
    }
  }

  // to check column relations, we'll need to call getColumn
  for (let i = 0; i < futoshikiColumnRelations.length; i++) {
    // currentRelation is an array: [ index, equalityString ]
    const currentRelation = futoshikiColumnRelations[i];

    if (currentRelation === null) {
      continue;
    }

    const index = currentRelation[0];
    const equalityString = currentRelation[1];
    const currentColumn = getColumn(board, i);
    const nextColumn = getColumn(board, i + 1);

    // to compare adjacent rows, we'll need to leverage
    // the current index of our loop as well as the next index
    // which are at i and i + 1
    if (!validateEqualities(currentColumn, nextColumn, index, equalityString)) {
      console.log('invalid at check col relation');
      return false;
    }
  }

  // if we make it here, we have a valid futoshiki board!
  return true;
};

console.log(validateFutoshiki(validFutoshikiBoard));
