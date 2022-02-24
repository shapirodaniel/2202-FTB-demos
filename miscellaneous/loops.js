// difference between loop types, when to use each
// classic for loop, we want to iterate a list, or a list of keys
// or we want to count up to a certain value and perform an operation
// a defined number of times

const myArray = [1, 2, 3];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

for (let i = 0; i < 10; i++) {
  console.log(`current value of iterator is ${i}`);
}

const myObject = {
  name: 'lily',
  age: 2,
  favoriteHobbies: ['sleeping', 'eating'],
};

// this is also an array, of keys
// [ 'name', 'age', 'favoriteHobbies' ]
const objectKeys = Object.keys(myObject);

// i'm going to iterate this list from left to right
// ie, ascending order
for (let i = 0; i < objectKeys.length; i++) {
  console.log(objectKeys[i]);
  console.log(myObject[objectKeys[i]]);
}

// lets iterate the same list backwards
for (let i = objectKeys.length - 1; i >= 0; i--) {
  console.log(objectKeys[i]);
  console.log(myObject[objectKeys[i]]);
}

// we could use a for-in loop on the object itself
// to simplify the loop we declared above
// it's more human readable and human maintainable this way :)
for (const key in myObject) {
  console.log(key);
  console.log(myObject[key]);
}

// for arrays, we can use this simplified for-of construct
// that lets us iterate the object ascending
for (const element of objectKeys) {
  console.log(element);
}

// while loops are great when you don't already know
// the length of something OR how many times you want to repeat an operation
let currentAmount = 1;
let doubledAmount = 5000;
let count = 0;

while (currentAmount < doubledAmount) {
  console.log('currentAmount is: ', currentAmount);
  console.log('doubledAmount is: ', doubledAmount);
  console.log('count is: ', count);
  currentAmount *= 2;
  count++;
}
