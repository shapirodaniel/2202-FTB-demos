// literals: values in JavaScript that are fixed -- you provide them
const myArrayLiteral = [];

const myObjectLiteral = {};

const myBooleanLiteral = true; // or false

const myFloatLiteral = -123.45; // base 10

const myOctalLiteral = 0071; // base 8, converts to 57 in base 10

const myHexadecimalLiteral = 0xf; // base 16, converts to 15 in base 10

const myBinaryLiteral = 0b11; // base 2, converts to 3 in base 10

const myRegExpLiteral = /\s+/g; // matches 1 to many spaces in a string

// .test() is a RegExp (regular expression) method
// calling it and passing a string parameter returns a boolean
// whether the RegExp matched the supplied string (or not)
console.log(myRegExpLiteral.test('   hello world!   ')); // true
console.log(myRegExpLiteral.test('nospacesinthisone')); // false

// special string characters

// \n: newline
console.log('\nthis line will appear above\nthis one');

// \t: tab
console.log('\nthis line is normal\n\tthis line is tabbed in');

// \: escape ' or " to use literal quotes in string
/* console.log('\nthis \'quoted\' word is ok'); */

// comment this line in to visualize syntax error
/* console.log('\nthis 'quoted' word is not') << SyntaxError */
