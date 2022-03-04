const myArray = [1, 2, 3, 4, 5];

// in node.js there's a special object we can use
// to pass information around, named module.exports
// it can be assigned whatever value you like

const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

// using module.exports + require is CommonJS syntax
// we have another way of working with imports and exports on the frontend
// that CAN be used on the backend, ie can be used with node.js, but we're not going to :)
module.exports = {
  // object shorthand notation means, skip assigning something EXPLICITLY
  // if it's named the same as the value we're trying to pass in
  // in other words, supply a variable, and the key-val pair will get the name of the varaible
  // as its key!
  myArray,
  add,
  subtract,
};
