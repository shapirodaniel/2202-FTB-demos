// this is a single line comment

/* 
  this is a multiline comment
  you can have as many lines as you like
*/

/* you can use multiline comments on a single line, and you can also interpolate them in other expressions */

function add(x, y) {
  console.log(x); // this comment can sit to the side of an expression

  // but it can't sit to the right >> console.log(y)

  return x + /* this comment can sit between expression args */ y;
}
