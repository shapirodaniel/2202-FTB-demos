// for loops

/* 
  simple for loops consist of three arguments
  
  - the iterator (usually i, j, k etc)
  - the "stop-when" expression, usually to the .length of an iterable
  - the "tick" expression, usually by +/- 1

  the iterator should be declared with a let variable
  this will scope the iterator to the loop block (more on this later)
  
  - ex, for (let i = <startValue>; ...)

  the "stop-when" expression is usually the length of the iterable,
  or a fixed value

  - ex, const myArray = [1,2,3]; 
  -     for (let i = 0; i < myArray.length; i++){ ... do something  }
  - ex, for (let i = 10; i >= 0; i--){ ... do something }

  the tick expression usually leverages either the increment or decrement operators
  
  - increment: ++, eg let myVar = 1; myVar++; console.log(myVar) // yields 2
  - decrement: --, eg myVar--; console.log(myVar) // yields 1
  - ++ is the same as thing += 1
  - -- is the same as thing -= 1
*/

const iterateArrayForward = (array) => {
  console.log('iterateArrayForward');
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

const iterateArrayBackward = (array) => {
  console.log('iterateArrayBackward');
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
};

const iterateArrayWithSkips = (array) => {
  console.log('iterateArrayWithSkips');
  for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
  }
};

const myArray = [1, 2, 3, 4, 5];

iterateArrayForward(myArray);
iterateArrayBackward(myArray);
iterateArrayWithSkips(myArray);

// while loops
/* 
  while (true) {
    // this will run forever
  }

  while (false) {
    // this will never run
  } 
*/

function liftoff(num) {
  console.log('liftoff');
  let i = num;

  while (i >= 0) {
    if (i > 0) {
      console.log(i);
      i--;
      continue; // jumps back to start of loop
    }

    console.log('...liftoff!');
    break; // end loop
  }
}

liftoff(10);

// for-in loop: iterate an object's keys
const dog = {
  name: 'lily',
  age: 2,
  favoriteToys: ['kong', 'reindeer', 'ropey toy'],
};

for (const key in dog) {
  console.log(`key is: ${key}`);
  console.log(`value is: ${dog[key]}`);
}

// for-of loop: iterate an array
for (const element of myArray) {
  console.log(`element of myArray is: ${element}`);
}

// loop over string
function sarcastify(string) {
  let sarcasticString = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      sarcasticString += string[i];
    } else {
      sarcasticString += string[i].toUpperCase();
    }
  }

  return sarcasticString;
}

console.log(sarcastify('this spongebob meme never gets old!'));
