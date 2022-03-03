// a higher order function is a function that takes another function as parameter
// the higher order function or HOF usually invokes the assigned function, but it doesn't necessarily need to
// here, we're storing an array of callback functions
// the higherOrderFunction logs the callback, it's type, and a boolean assertion: whether the callback is an instance of the Function constructor

const arrayOfCallbacks = [
  // 0: logPizza,
  // 1: logSalad,
  // 2: logHamburgers
];

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

    // i'm evaluating !boolean, where boolean is the output of instanceof
    // this will let us avoid invoking a non-function value/data type, like the number supplied below as notAFunction
    if (!(callbackFunction instanceof Function)) {
      return;
    }

    callbackFunction();
  }
};

const logPizza = () => {
  console.log('pizza time!');
};

const logSalad = () => {
  console.log('salad time!');
};

const logHamburgers = () => {
  console.log('hamburgers time!');
};

const notAFunction = 7;

// because logPizza is itself a function
// by definition, higherOrderFunction is in fact a higher-order function :)
higherOrderFunction(logPizza);
higherOrderFunction(logSalad);
higherOrderFunction(logHamburgers);
higherOrderFunction(notAFunction);

// the Array.prototype comes with several higher-order functions designed to abstract the sort of logic we usually want to apply to lists/collections, which usually involves:
/* 
  FOREACH
  1. applying a transformation to every element in the list, or more generally, "doing something" for every index in the list

  MAP
  2. generating a new, dereferenced copy of the list with a transformation applied

  FILTER
  3. filtering a list and retaining/discarding values based on a condition

  REDUCE
  4. reducing the contents of a list to a single value or data structure (complex or primitive, we'll look at both cases)
*/

arrayOfCallbacks.forEach((ele, index, entireArray) => {
  console.log(`ele is: ${ele}`);
  console.log(`index is: ${index}`);
  console.log(`entireArray is: ${entireArray}`);

  if (ele instanceof Function) {
    console.log("invoking ele since it's a function!");
    ele();
  } else {
    console.log("logging ele since it's not a function!");
    console.log(ele);
  }
});

// if i wanted to modify each spot in my callbacks array, i could reassign values by indexing into the array itself, supplied as the third parameter
// since we're not actually "using" the element itself (the first parameter), we'll use a single underscore to represent that value
arrayOfCallbacks.forEach((_, index, entireArray) => {
  entireArray[index] = 8;
});
console.log(
  `arrayOfCallbacks after replacing all functions with value 8:`,
  arrayOfCallbacks
);

const myArrayOfNumbers = [1, 2, 3, 4, 5];

// Array.prototype.map() -> forEach, except we're going to return the value and any modification that we make to the value

const doubleEverythingBut5 = myArrayOfNumbers.map((ele, index, array) => {
  // if i console logged these, i'd get the same values
  // that i got for forEach
  return ele === 5 ? ele : 2 * ele;
});

// Array.prototype.filter() -> forEach, except we'll conditionally return values that meet the boolean expression when it evaluates to a truthy value

const oddNumbers = myArrayOfNumbers.filter((value) => value % 2 !== 0);
console.log(oddNumbers);

const evenNumbers = myArrayOfNumbers.filter((value) => value % 2 === 0);
console.log(evenNumbers);

const just5 = myArrayOfNumbers.filter((value) => value === 5);
console.log(just5);

// Array.prototype.reduce() -> unlike the prior three functions, reduce() takes 4 arguments: the "accumulator", the "current value", we get the index and full array as well

// reduce will do whatever you tell it to, to every value, and apply those changes to an accumulator supplied as the SECOND argument to the higher-order function itself

const sumOfNumbersArray = myArrayOfNumbers.reduce(
  (accumulator, value, index, array) => {
    const currentSum = accumulator;
    const currentValue = value;
    const currentTotal = currentSum + currentValue;

    console.log(`index is: ${index}`);
    console.log(`array length is now: ${array.slice(index)}`);
    console.log(`current total is: ${currentTotal}`);

    return currentTotal;
  },
  0 // the second parameter to the reduce HOF is the initial value we want to start accumulating on
);

console.log(sumOfNumbersArray);

// the real power of reduce not only lies in being able to sum things up or concatenate stuff, you can also build objects!

// thanks sylvia plath and poetryfoundation.org! :D
const theApplicantPoem =
  "first are you our sort of a person Do you wear A glass eye false teeth or a crutch A brace or a hook Rubber breasts or a rubber crotch Stitches to show something's missing No no Then How can we give you a thing Stop crying Open your hand Empty Empty Here is a hand To fill it and willing To bring teacups and roll away headaches And do whatever you tell it Will you marry it It is guaranteed To thumb shut your eyes at the end And dissolve of sorrow We make new stock from the salt I notice you are stark naked How about this suit Black and stiff but not a bad fit Will you marry it It is waterproof shatterproof proof Against fire and bombs through the roof Believe me they'll bury you in it Now your head excuse me is empty I have the ticket for that Come here sweetie out of the closet Well what do you think of that Naked as paper to start But in twenty-five years she'll be silver In fifty gold A living doll everywhere you look It can sew it can cook It can talk talk talk It works there is nothing wrong with it You have a hole it's a poultice You have an eye it's an image My boy it's your last resort Will you marry it marry it marry it";

const generateMarkChain = (poem) => {
  const wordsArray = poem.toLowerCase().split(' ');

  // reducing over wordsArray, i'll build a markov chain
  // with the usual association logic, which is:
  // if the word is "in" the dictionary, i'll push the next word
  // into the current word's values array,
  // otherwise, i'll initialize a new values array
  // by adding an array with the next word as the sole element

  const generatedMarkovChain = wordsArray.reduce(
    (markovChain, currentWord, index) => {
      if (currentWord in markovChain) {
        markovChain[currentWord].push(wordsArray[index + 1]);
      } else {
        markovChain[currentWord] = [wordsArray[index + 1]];
      }

      return markovChain;
    },
    {}
  );

  return generatedMarkovChain;
};

const mChain = generateMarkChain(theApplicantPoem);
console.dir(mChain, { depth: null });
