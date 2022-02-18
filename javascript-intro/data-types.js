// boolean
const isTrue = true;
const isFalse = false;

// object
const dog = {
  name: 'lily',
  age: 7,
  favoriteToys: ['kong', 'reindeer', 'cheesy-bone'],
};

// null
const isNull = null;

// undefined
const isUndefined = undefined;

// number
let myNum = 7;

/* number operations */

// addition
myNum = myNum + 1; /* equivalent to: myNum += 1 */
console.log(myNum); // 8

// substraction
myNum = myNum - 5; /* equivalent to: myNum -= 5 */
console.log(myNum); // 3

// multiplication
myNum = myNum * 4; /* equivalent to: myNum *= 4 */
console.log(myNum); // 12

// division
myNum = myNum / 2; /* equivalent to: myNum /= 2 */
console.log(myNum); // 6

// Not-A-Number (NaN): it's a number, but it's not...
const myNaN = NaN;
// the "typeof" keyword lets us find out what data type an expression is
console.log(typeof myNaN); // 'number'

// Infinity: exactly what you think it is :)
const myPosInfinity = Infinity;
const myNegInfinity = -Infinity;

// proving that +/- Infinity is greater/less than the max/min number values
// that JavaScript can handle
// positive: 1.79 * (10 ** 308), where ** is the exponentiation operator
// negative:  2 * (10 ** -1074)
console.log(myPosInfinity > Number.MAX_VALUE); // true
console.log(myNegInfinity < Number.MIN_VALUE); // true

// string
const myString = 'hello world!';

// string with backticks: allows string interpolation, retains formatting
const myInterpolatedString = `Hi, my name is ${dog.name} and I'm ${dog.age} years old!`;

console.log(myInterpolatedString);

const myMultilineString = `
  <div>
    <span>Hello World!</span>
  </div>
`;
