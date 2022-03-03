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
