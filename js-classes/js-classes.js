// a good use case for arrow functions is classes
// arrow functions take on the "this" context of their surrounding lexical environment

// it's a blueprint for generating objects
// based on some defined characteristics we expect the object to have
// ie, properties, and methods

// i'm going to bind this function by using the bind() method that comes on functions
// we'll still see that this.name is undefined as this refers to the global object, since arrow functions don't retain their this context!
const barkWithArrowFunctionBound = () => {
  console.log(
    `inside bound version of barkWithArrowFunction, ${this.name} says woof woof :)`
  );
};

// we can demonstrate the issue here by assigning a name property to the globalThis, which will log out whenever we try to use the arrow function
globalThis.name = 'globalThis';

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.boundBark = barkWithArrowFunctionBound.bind(this);
  }

  // it's assumed that any method we state in the body of a class definition will be attached to the EVENTUAL object we'll create by invoking the constructor!
  // this bark() function will be bound to the class instance, and will retain the this context of the class
  bark() {
    console.log(`${this.name} says woof woof :)`);
  }
}

const dogInstance = new Dog('lily', 2);
dogInstance.bark();

// using dot notation to assign a method to my object instance
// which happens to have been built with the Dog constructor
// however, where you MIGHT think this will refer to the dog instance, it won't!
// arrow functions have no this context, so they'll always default to the scope in which they were defined, ie the globalThis (node.js) or window object (in the browser)
dogInstance.barkWithArrowFunction = () => {
  console.log(`inside barkWitharrowFunction, ${this.name} says woof woof :)`);
};

// this is undefined here
dogInstance.barkWithArrowFunction();

// this
dogInstance.boundBark();
