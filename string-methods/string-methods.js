const myString = 'hello world!';

myString.charAt(0); // 'h'
myString.charAt(myString.length - 1); // '!'
myString.charAt(-1); // ''

// bracket access
myString[0]; // 'h'
myString[myString.length - 1]; // '!'
myString[-1]; // undefined

// convert chars to UTF-16 code unit value
// hint hint this could be useful for caesar cypher :)
'a'.charCodeAt(0); // 97
'c'.charCodeAt(0); // 99

// instantiating string with String constructor vs String function
console.log(typeof new String(7)); // 'object'
console.log(typeof String(7)); // 'string'

// concatenate strings and produce a new one
'hello'.concat(' world!'); // 'hello world!'

// boolean result of string search
'hello world!'.includes('&'); // false
'hello world!'.includes('!'); // true

// startsWith, endsWith (with optional index)

// startsWith opt index to start searching from
// comparing characters linked with logical AND &&
'hello world!'.startsWith('hello'); // true
'hello world!'.startsWith('hello', 1); // false

// endsWith opt index to stop searching until (ie modify length of string)
console.log('hello world!'.length); // 12
'hello world!'.endsWith('world!'); // true
'hello world!'.endsWith('world!', 12); // true
'hello world!'.endsWith('world!', 11); // false

// indexOf returns index of match or -1 if not found, opt index to start search
'hello world!'.indexOf('hello'); // 0
'hello world!'.indexOf('hello', 1); // -1

// toLowerCase, toUpperCase
'PUPPIES!'.toLowerCase(); // 'puppies!'
'hello world!'.toUpperCase(); // 'HELLO WORLD!'

// trim whitespace
'    whitespace    '.trim(); // 'whitespace'

// slice takes two params
// first is starting index, inclusive
// second (optional) is end index, EXCLUSIVE
// eg, sliceing from 1 yields chars from position 1 to end of string
// eg, slicing from 0 to 2 yields the chars at positions 0 and 1, not 2
'hello world!'.slice(6); // 'world!'
'hello world!'.slice(1, 5); // 'ello'

// split takes a delimiter and returns an array of values split on the delimiter
'hello world!'.split(''); // yields:
/* 
  [
    'h', 'e', 'l', 'l',
    'o', ' ', 'w', 'o',
    'r', 'l', 'd', '!'
  ] 
*/
'hello world!'.split(' '); // yields: ['hello', 'world!']
'comma, separated, values'.split(', '); // yields ['comma', 'separated', 'values']

// replace take a pattern and a replacement value
// without a regex global flag (g), only the first instance of the value will be replaced
// without a regex case-insensitive flag (i), only exact case matches will be replaced
'this sentence will look WEIRD without its vowels'.replace(/a|e|i|o|u/, '');
'this sentence will look WEIRD without its vowels'.replace(/a|e|i|o|u/g, '');
'this sentence will look WEIRD without its vowels'.replace(
  /a|e|i|o|u/gi,
  'pizza'
);

// substring grabs a subset of chars
// same behavior as slice with both params (end index is EXCLUSIVE)
'spongebob squarepants'.substring(6, 16); // 'bob square'
