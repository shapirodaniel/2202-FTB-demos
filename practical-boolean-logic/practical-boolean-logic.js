// pratical use cases for truthiness and falsiness
// pretty frequently in webdev we're fetching data
// from an external source
// and in order to "do something" with it
// we usually want to make sure that
// a, it exists
// b, it's the type we expect it to be
// c, if it's list / dictionary, we want to validate
// that it actually holds data
// so we don't end up throwing Type/ReferenceErrors by
// trying to modify the contents of those data structures

const failedList = null;
const emptyListFromInterwebs = [];
const listWithItemsFromInterwebs = [1, 2, 3, 4, 5];

// if we expect a list to contain objects
// we might want to access certain properties in those objects
// very frequently we end up retrieving lists of objects from databases
// [ { id: 1, name: 'lily', age: 2 }, ... ]

// failedList.length;

if (failedList) {
  // i'm free to do stuff to a non-null, non-undefined, or non-zero value
  // as well as anything else that's not inherently falsy by
  // the axioms of javascript
}

if (emptyListFromInterwebs.length) {
  const firstPet = emptyListFromInterwebs[0];

  if (firstPet && firstPet.name) {
    console.log(firstPet.name);
  }
}

// let's say that we only want to perform a calculation on a number
// so we'd like to make sure that any value we're coercing
// from number to string or vice versa doesn't yield a NaN
// we'll have to leverage the isNaN function
// since coercing '0' to a number will yield a falsy value
// even though it's a valid number!
if (isNaN(+'pizza')) {
  console.log('that value was not a number! try again :)');
} else {
  console.log('hooray, that was a number!');
}
