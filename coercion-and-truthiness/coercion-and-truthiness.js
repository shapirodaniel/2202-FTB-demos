// truthy definition: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// falsy definition: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// type coercion definition: https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion

// a truthy value is considered true when encountered in a Boolean context
// all values are truthy unless defined as falsy

// a falsy value is considered false when encountered in a Boolean context
// falsy values: false, 0, -0, 0n, "", null, undefined, NaN

// type coercion is the automatic or implicit conversion of values from one data type to another, like strings to numbers
// type conversion is similar, however type coercion is IMPLICIT while type conversion can be either implicit OR explicit

const value1 = '6';
const value2 = 4;
let sum = value1 + value2;
console.log('add number to string: ', sum); // yields 64

sum = value2 + value1;
console.log('add string to number: ', sum); // yields 46

sum = +value1 + value2;
console.log('sum values with unary operator conversion: ', sum); // yields 10

// for all arithmetic operations, the operator doesn't have a choice of how to apply the operation
// so we get numeric output

console.log('4' - 4); // 0
console.log('4' * 4); // 16
console.log('4' / 4); // 1

// if we switch the order of string / number around, same output
console.log(4 - '4'); // 0
console.log(4 * '4'); // 16
console.log(4 / '4'); // 1

// the == operator coerces in unexpected ways
console.log(1 == true); // true

console.log(null == 0); // false

console.log(!!null == 0); // true

console.log(false == ''); // true

console.log('' == NaN); // false

console.log('' == 0); // true

// and, perhaps the strangest one
// NaN does not strictly equal NaN
console.log(NaN === NaN); // false ??

// leveraging coercion to perform conditional logic
const emptyArray = [];

const arrayWithItems = [
  { id: 1, name: 'lily', age: 2 },
  { id: 2, name: 'wally', age: 4 },
];

const listItems = (array) => {
  // .length property is truthy if its value !== 0
  if (array.length) {
    array.forEach((item) => {
      console.log(`${item.name} is ${item.age} years old with id ${item.id}`);
    });
    return;
  }
  // otherwise, we throw an error
  throw new Error('no items in array!');
};
