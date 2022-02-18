// assignment: store a value to a variable
// uses a single =
let myString = 'hello world';

// equality: two types, coercing and strict
// always use strict ===
console.log(7 === 7); // true
console.log(7 === 8); // false

// some notable behaviors
console.log(NaN === NaN); // false
console.log({} === {}); // false due to memory allocation and pass-by-reference for complex data types

// coercing: do not use this unless you're sure you want the side-effects
// under the hood, JavaScript forces
console.log(7 == '7'); // true, since the string was coerced to a number value
console.log(true == 1); // true, since 1 is coerced to a boolean value
console.log(null == undefined); // true, since undefined was coerced to a "falsey" value
