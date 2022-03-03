// a higher order function is a function that takes another function as parameter
// the higher order function or HOF usually invokes the assigned function, but it doesn't necessarily need to
// here, we're storing an array of callback functions
// the higherOrderFunction logs the callback, it's type, and a boolean assertion: whether the callback is an instance of the Function constructor

const arrayOfCallbacks = [];

const higherOrderFunction = (func) => {
  console.log(func);
  console.log(typeof func);
  console.log(func instanceof Function);

  arrayOfCallbacks.push(func);

  invokeCallbacks();
};

const invokeCallbacks = () => {
  for (let i = 0; i < arrayOfCallbacks.length; i++) {
    const callbackFunction = arrayOfCallbacks[i];
    callbackFunction();
  }
};

const logPizza = () => {
  console.log('pizza time!');
};

const logSalad = () => {
  console.log('salad time!');
};

higherOrderFunction(logPizza);
higherOrderFunction(logSalad);

// the Array.prototype comes with several higher-order functions designed to abstract the sort of logic we usually want to apply to lists/collections, which usually involves:
/* 
  1. applying a transformation to every element in the list, or more generally, "doing something" for every index in the list
  2. generating a new, dereferenced copy of the list with a transformation applied
  3. filtering a list and retaining/discarding values based on a condition
  4. reducing the contents of a list to a single value or data structure (complex or primitive, we'll look at both cases)

*/
