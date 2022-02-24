// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// global context
// this refers to the global object (global in node.js, window in the browser)
// important! this expression will throw a ReferenceError in node.js
// since node has no concept of a "window"

/* console.log(this === window); */
console.log(this === module.exports);

// without a variable declaration
// this property will be bound to the global/window
pizza = 'squid, chorizo, rocket';

/* console.log(window.pizza); */
console.log(this); // {}
console.dir(global.pizza); // 'squid, chorizo, rocket'

// this inside a function defaults to the global object
// either window in browser, or global in node.js
function orderPizza() {
  return this.pizza;
}
console.log(`ordering pizza: your ${orderPizza()} pizza is on its way!`);

// this can be stated in unbound functions
// and can then be leveraged to refer to a supplied object
// through the use of Function.prototype.call() or Function.prototype.apply()

const toppings = {
  squid: {
    price: 490,
    inventory: 20,
  },
  chorizo: {
    price: 315,
    inventory: 40,
  },
  rocket: {
    price: 115,
    inventory: 130,
  },
};

function calculateInventoryValue() {
  let totalValue = 0;

  for (const key in this) {
    totalValue += this[key].price * this[key].inventory;
  }

  return totalValue;
}

// without supplying an object via .call() or .apply()
// this is undefined, and math operations on non-numeric values yield NaN
const valueWithoutThisContext = calculateInventoryValue();
console.log({ valueWithoutThisContext });

// by supply an object, we're assigining the value of this
// inside the function call, to the object we've supplied
// this will calculate a total inventory value for any object
// that consists of sub-objects with "name" and "price" fields
const valueWithThisContext = calculateInventoryValue.call(toppings);
console.log({ valueWithThisContext });

// .bind(object) returns a copy of a function with its "this" context
// bound to the object supplied to the bind call
const calculateToppingsInventory = calculateInventoryValue.bind(toppings);
console.log({ boundToppingsInventoryCalculator: calculateToppingsInventory() });
