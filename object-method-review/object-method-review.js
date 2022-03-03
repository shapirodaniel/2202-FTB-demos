// object methods are functions bound to an object

// i could either state the functions separately and assign them as properties
function bark() {
  // this context will point to whatever object i bind this function to
  console.log(`${this.name} says woof woof :D`);
}

const myObject = {
  name: 'lily',
  age: 2,
  // why didn't i write parentheses ...
  // if i call the function here, i'm actually going to be storing the OUTPUT, rather than the function itself! meaning, i won't be able to "call" the function if it's not a function anymore...
  bark: bark,
  // or, i could define the function "anonymously" on the property itself
  itsMyBirthday: function () /* no name, we're anonymouse :) */ {
    const currentAge = this.age;
    this.age++;

    console.log(
      `i'm ${this.name}, i was ${currentAge}, but now i'm ${this.age}`
    );
  },
};

console.log(myObject.bark);

// can't call a method on undefined
// console.log(myObject.bark());

myObject.bark();
myObject.itsMyBirthday();
myObject.itsMyBirthday();

// we need to understand and be super comfortable with this idea:

// this is a function SIGNATURE, it hasn't been called yet
// it is not a VALUE, but if we invoke it, it will GIVE US a value
// through the RETURN keyword, or it's a void function that
// implicitly returns the undefined primitive
function doNothing() {
  // implicitly, this function's return value is undefined
  // because nothing is coming back :)
}

// if i want to get the value out of my function, i need to call it
// ie i need to INVOKE it
doNothing();
