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
