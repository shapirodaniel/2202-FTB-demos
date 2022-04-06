// using for-of loop
const multidimensionalArraySum = (array) => {
  let result = 0;

  for (const element of array) {
    // recursive case: the element is an array
    // we recurse on the element, return the sum
    // from the recursive call, and add it
    // to our result
    if (Array.isArray(element)) {
      result += multidimensionalArraySum(element);
    } else {
      // base case: element is an integer
      // we add directly to result and continue iterating
      result += element;
    }
  }

  return result;
};

// using Array.prototype.reduce()
const mdAs = (array) => {
  return array.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc + mdAs(curr);
    } else {
      return acc + curr;
    }
  }, 0);
};

const nestedArray = [1, -10, [2, [3, 4, [7]]], [[[[9]]]]];
const forOfResult = multidimensionalArraySum(nestedArray); // 16
const reduceResult = mdAs(nestedArray); // 16

console.log({ forOfResult, reduceResult });
