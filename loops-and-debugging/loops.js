// for loops
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
