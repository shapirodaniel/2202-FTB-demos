// declare functions with the function keyword
// optionally specify parameters or "params" in the parentheses that follow the function name

// this is the function signature or definition
function logIt(string) {
  /* the body of your function, where the magic happens! */
  console.log(string);
  /* without the return keyword, this function will return undefined by default */
}

function addNumbers(numOne, numTwo) {
  return numOne + numTwo;
}

// this is the logIt invocation
logIt('hello world!'); // logs 'hello world!'

// this is the addNumbers invocation
// it will not log this value until we log its return value
console.log(addNumbers(10, 40)); // logs 50

// functions can call other functions
// their parameters can be passed through to those "inner" functions
// and the "inner" function can be a param as well
function innerFunc() {
  console.log('hi im inner func :D');
}

// functions are "first-class citizens", meaning that they can be passed as params
// here, we're passing a generic function parameter "fn"
// that gets invoked inside the main function
function logAddNumbers(fn, numOne, numTwo) {
  console.log(`calling ${fn.name}!`);

  const sum = fn(numOne, numTwo);

  console.log(`sum is ${sum}`);

  console.log('calling innerFunc!');

  innerFunc();
}

// we'll only get the output of logAddNumbers if we invoke it
// and pass in the addNumbers function as a parameter
logAddNumbers(addNumbers, 100, 25);

// functions can optionally be stored to variables regardless of whether they're named or not
function hamburgers() {
  console.log('hamburgers fn stored to pizza variable!');
}

const pizza = hamburgers;

console.log(pizza());
console.log(hamburgers());

// functions can be declared with special "fat arrow" syntax
// they're assigned like the above, but they omit the function keyword
// in favor of an unnamed params block and a => operator
// sometimes you'll hear these referred to as "lambdas" or "anonymous functions"
const fatArrowFn = (string) => {
  return string.split(''); // converts string to array of characters
};

console.log(fatArrowFn('hello world!'));
