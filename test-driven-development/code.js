function addTwoNumbers(x, y) {
  // validate function inputs
  for (const value of [x, y]) {
    // two ways to convert a value to a number
    // the Number constructor, or the unary operator ( + )
    if (isNaN(Number(value))) {
      throw new Error('value is not a number!');
    }
  }
  // else, return sum
  return x + y;
}

// ...args is an array
// (...) is "spread syntax", and can be used on any iterable
function addUnknownNumberOfArgs(...args) {
  let total = 0;
  for (const arg of args) {
    if (isNaN(+arg)) {
      throw new Error('value is not a number!');
    }
    total += arg;
  }
  return total;
}

module.exports = {
  addTwoNumbers,
  addUnknownNumberOfArgs,
};
