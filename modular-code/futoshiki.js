/* 

let's build a futoshiki validator

rules of futoshiki

place the numbers 1 to 5 in each row and column

no row or column can hold a repeated number

inequalities may be stated on row:row relations and/or column:column relations

*/

const validFutoshikiBoard = [
  [1, 2, 3, 4, 5],
  [3, 1, 2, 5, 4],
  [2, 4, 5, 3, 1],
  [5, 3, 4, 1, 2],
  [4, 5, 1, 2, 3],
];

/* 

looking "down" to next row, where current col of current row relates to next col of next row

[null, null] indicates no relation between current, next row

otherwise, [colIndex, type], where colIndex is a position in the row array

where type is "gt" (>) or "lt" (<) 

for example, the first row relation below is at index 1: [0, 'gt']

0 refers to the zeroth position of the second and third arrays of validFutoshikiBoard

so we're asserting that 3 'gt' 2, or 3 > 2

*/

const futoshikiRowRelations = [
  [null, null],
  [0, 'gt'],
  [4, 'lt'],
  [4, 'lt'],
];

/* 

same as above logic, except these indices refer to an index within a derived column

for example, column 1 is the zeroth position of each row, derived as a separate array

ex, in the validFutoshikiBoard above, the "first" column is

0: [1, 3, 2, 5, 4], the second is 1: [2, 1, 4, 3, 5]

so the first column relation below is between the last index of both derived arrays

ie, 4 "lt" 5, or 4 < 5 

*/

const futoshikiColumnRelations = [
  [4, 'lt'],
  [3, 'lt'],
  [4, 'lt'],
  [1, 'gt'],
];

/* 
  
  our goal is to create a function validateFutoshiki(board)
  that accepts a matrix, or 1 x n array (of arrays of length n)
  and returns a boolean that lets us know if the solution is valid or not

  validateFutoshiki(validFutoshikiBoard) should yield true

*/


// how to approach a big problem?
// break it down into smaller pieces :)
// these smaller pieces are usually called "helper" functions
// we'll leverage them in the validateFutoshiki function

// we'll need a way of getting a row, and deriving a column
// so let's write those functions first
// we'll probably want to loop over our validFutoshikiBoard to check each row, column
// and we're checking for 1-5 without repeat, as well as any inequalities that need to be observed

const getRow = 