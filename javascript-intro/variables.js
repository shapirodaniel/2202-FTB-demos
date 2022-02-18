// certain keywords in javascript are reserved for special functionality
// see https://www.w3schools.com/js/js_reserved.asp

// global variables
var myGlobalVariable = 'hi im global variable';

// block-scoped variables
const myConst = 7;
let myLet = 'pizza';

myConst = 10; // throws a TypeError: Assignment to constant variable (cannot be changed)
myLet = 'hamburgers'; // variables declared with "let" are mutable (can be changed)

// let and var can be declared without initialization
let uninitializedLet;
var uninitializedVar;

// const must be declared and assigned, else SyntaxError is thrown
const uninitializedConst;

// important! notice that running this file yields a SyntaxError for the uninitialized const in line 19, but NOT the TypeError in line 11 ... why is this? doesn't the JavaScript runtime read each line into memory in order? why does it seem to have skipped over the error in line 10?

// variables in JavaScript (as well as functions) are hoisted to the top of the execution context when they're initialized! since the uninitializedConst gets hoisted, the JS runtime encounters this error before the error in line 11...