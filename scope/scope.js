// this is the global scope
// anything declared here is accessible anywhere
const myGlobalVariable = 42;

// this function creates its own scope
// anything inside the function has access to anything declared at the same "level" of scope
// but nothing in the "outer", ie global scope has access to the function's "inner" scope
function myFunction(number) {
  console.log(number);
  console.log(myGlobalVariable);
}

myFunction(7);

// this will throw a ReferenceError, since the number parameter
// is only accessible inside the scope of myFunction
/* console.log(number); */

// execution context looks for things in its local scope first
// then climbs the scope chain until it reaches the global scope
// if the reference isn't found in the global scope, a ReferenceError will be thrown

let magicNumber = 10;

function printMagicNumber(magicNumber) {
  console.log(magicNumber);
}

// logs 111
printMagicNumber(111);

// logs undefined -- why, if magicNumber is defined in outer scope ??
printMagicNumber();

// let and const are BLOCK scoped variables
// this means that they're only "in-scope" inside curlies
function myNestedScopes(number) {
  const myNumberParameter = number;
  console.log(myNumberParameter);

  // block scope
  // let, const variables can be redeclared as long as the initial declaration
  // is in a different, ie higher or lower, scope
  {
    const myNumberParameter = 7;

    function myInnerFunction(number) {
      console.log(number);
      const myNumberParameter = number;

      {
        const myNumberParameter = 800;
        console.log(myNumberParameter);
      }

      console.log(myNumberParameter);
    }

    console.log(myNumberParameter);
  }

  myInnerFunction(222);
}

myNestedScopes(10000);

// we can't call the inner function from outside the scope in which it was declared
/* myInnerFunction() */ // will throw a ReferenceError
