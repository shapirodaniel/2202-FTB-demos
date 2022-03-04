// i can pull code from other files using the require() function in node.js
const { myArray, add, subtract } = require('./modules-a'); // the require statement is pretty nice, it sort of "knows" what file you're targeting and doesn't require the extension to be supplied, ie doesn't need *.js
const { multiply, divide } = require('./modules-c');

console.log(add(myArray[0], myArray[1]));
console.log(subtract(myArray[2], myArray[3]));
console.log(multiply(myArray[3], myArray[4]));
console.log(divide(myArray[4], myArray[0]));
