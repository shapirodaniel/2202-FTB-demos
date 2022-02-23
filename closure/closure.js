// closure: child function "remembers" the parent function's inner scope
// the parent function returns the anonymous child function
const parentFunction = () => {
  let hiddenValue = 0;

  return function () {
    console.log(`hiddenValue before increment is: ${hiddenValue}`);
    hiddenValue++;
    console.log(`hiddenValue after increment is: ${hiddenValue}`);
  };
};

// if we invoke parentFunction(), we'll get a function back
// we can store that function to a variable and use that variable to invoke it
// the child function will still "know" and have access to hiddenValue
// even though it's "out of scope" when the child function is created and stored
const childFunction = parentFunction();

// invoking childFunction repeatedly will increment the hidden value
childFunction();
childFunction();
childFunction();
childFunction();

// if we try to log the value of hiddenValue in the global scope
// we'll get a ReferenceError, since hiddenValue only "exists" in the parentFunction's scope
// HOWEVER, childFunction "originates" in that SAME SCOPE so it still has access
// this is due to LEXICAL ENVIRONMENT RECORDS, which are registered
// when a scope is created (global, function, and/or block)
console.log(hiddenValue);
