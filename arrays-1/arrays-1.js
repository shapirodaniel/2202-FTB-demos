// javascript arrays are objects with special properties / characteristics
// they're resizable
// they can contain a mix of different data types
// they are not associative arrays: array elements can ONLY be accessed using integers as indices
// they are zero-indexed: first element at 0, last element at array.length - 1
// array copy methods create shallow copies -- arrays are passed by REFERENCE, not by VALUE

const myArray = [
  1,
  undefined,
  { id: 3 },
  'pizza',
  [4],
  null,
  () => {
    console.log('im the last element in this array :D');
  },
];

myArray[0]; // 1
myArray[myArray.length - 1]; // [Function (anonymous)]
const myFunction = myArray[myArray.length - 1];
myFunction(); // logs 'im the last element in this array :D'

for (let i = 0; i < myArray.length; i++) {
  const currentElement = myArray[i];
  console.log(currentElement);
}

// array constructor
const newArray = new Array(10);
newArray.length; // 10
newArray[0]; // undefined
console.log(newArray); // [<10 empty items>]
newArray.fill(null);
console.log(newArray); // [null, null, (etc) ...]

// .flat(), levels nested array
const nestedArray = [
  [1, 2],
  [3, 4],
];
nestedArray.flat(); // yields [1,2,3,4]

// .push(), add new elements to end of array and return new array length
const pizzaToppings = ['anchovies', 'mushrooms'];
pizzaToppings.push('sausage'); // returns 3
console.log(pizzaToppings);

// .pop(), remove last element in array and return it
const lastTopping = pizzaToppings.pop();
console.log(lastTopping, pizzaToppings.length); // 'sausage', 2

// .shift(), remove first element in array
const firstTopping = pizzaToppings.shift();
console.log(firstTopping, pizzaToppings.length); // 'anchovies', 1

// .unshift(), add new element to front of array (ie at position 0)
pizzaToppings.unshift('brisket');
console.log(pizzaToppings); // ['brisket', 'mushrooms']

// .includes(), boolean output if element is found
pizzaToppings.includes('ham-and-pineapple'); // false
pizzaToppings.includes('mushrooms'); // true

// .reverse(), reverses order of elements
pizzaToppings.reverse(); // ['mushrooms', 'brisket']

// .splice(), remove elements from middle of array, optionally add something to replace what's been removed
// three params: start index, number of elements, optional insert value(s)
// returns the spliced value in an array: eg below, ['mushrooms']
pizzaToppings.splice(0, 1, 'pepperoni');

// .concat()
const arr1 = [1, 2];
const arr2 = [3, 4];
const firstArrayFirst = arr1.concat(arr2);
const secondArrayFirst = arr2.concat(arr1);
// shortcut for annotating your console logs
// wrap the variables in an object literal
// the object shorthand syntax will yield name: value, where name is the name of the variable
console.log({ firstArrayFirst, secondArrayFirst });

// STATIC METHODS: Array.from, Array.isArray
// *note*: this code must be run in a browser terminal, since node.js doesn't know what a "document" is...
// let's build an HTML document through pure javascript
// first, we'll invoke the Document constructor
// then we'll call a few methods to build HTML tags and attach them
// (more on this Friday, this is a sneak peek...)

const myDocument = new Document();
const docBody = myDocument.createElement('body');
myDocument.appendChild(docBody);

const divWithID = myDocument.createElement('div');
divWithID.id = 'divID';

docBody.appendChild(divWithID);
docBody.appendChild(myDocument.createElement('div'));
docBody.appendChild(myDocument.createElement('div'));
docBody.appendChild(myDocument.createElement('div'));

const myDivs = myDocument.querySelectorAll('div');
// Array.from()
const myArrayFromDivs = Array.from(myDivs);

console.log(myDivs); // NodeList
console.log(myArrayFromDivs); // (no type specified)

console.log(Array.isArray(myDivs)); // false
console.log(Array.isArray(myArrayFromDivs)); // true

console.log(myDivs[0].id); // divID

console.log(typeof myDivs); // 'object'
console.log(typeof myArrayFromDivs); // 'object'
