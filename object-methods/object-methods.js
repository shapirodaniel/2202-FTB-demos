// defining an object method
// assigning a function to an object key

const car = {
  make: 'toyota',
  model: 'camry',
  year: '2017',
  price: 13000,
  start: function () {
    console.log('vrooooom im a car');
  },
  stop: function () {
    console.log('sad engine noises :(');
  },
  turn: function (direction) {
    console.log(`turning ${direction}!`);
  },

  // "this" refers to the object the method is bound to
  getDescription: function () {
    return `${this.make} ${this.model}: ${this.year}`;
  },

  // arrow functions can make "implicit" returns
  // by omitting the curly braces from the function signature
  // we will return whatever expression is written to the immediate right
  // of the fat arrow operator

  // HOWEVER: arrow functions should not be used as methods
  // because they default to the globalThis if they're not bound
  // since the "name" property isn't defined on the global/window object
  // getFieldArrow will return undefined
  // more on this in the "this-context" demo in this repo
  getPriceArrow: () => this.price,

  // getPriceFn will return the price
  // since the function keyword binds this to the object context
  getPriceFn: function () {
    return this.price;
  },
};

car.start();
car.stop();
car.turn('right');
console.log(car.getDescription());
console.log(car.getPriceArrow());
console.log(car.getPriceFn());
