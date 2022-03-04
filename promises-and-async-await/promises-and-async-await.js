// promises represent the eventual resolution of a value, or rejection with an error message

// promises are "proxies" for values
// by leveraging promises, we can handle situations where we need to do "something" with data that hasn't resolved yet, either through a delay set by a timer / interval, or due to a long-running or computationally-expensive operation, or due to a network request

const longRunningOperation = (len, isTimed) => {
  let timesRun = 0;

  function getRandomDigitsString() {
    return Math.random()
      .toString()
      .slice(2, len + 2);
  }

  let randString = getRandomDigitsString(len);

  // any particular random sequence is equally unlikely :D
  while (randString !== '555') {
    timesRun++;
    randString = getRandomDigitsString(len);
    console.log(`randString is: ${randString}\r`);

    if (timesRun > 150000 && !isTimed) {
      throw new Error('Error: long running operation ran for 150,000 trials.');
    }
  }

  console.clear();
  console.log(`while loop ran ${timesRun} times`);

  return timesRun;
};

// this higher-order function leverages spread syntax
// to refer to all arguments after the first argument supplied to it
// which allows us to call the callback supplied with whatever arguments
// it requires! :)
const timeFn = (fn, ...args) => {
  console.time('long running operation ran for: ');
  fn(...args);
  console.timeEnd('long running operation ran for: ');
};

// uncomment this to learn more about how to measure function runtime / performance
/* timeFn(longRunningOperation, 5, true); */

// this promise resolves the longRunningOperation with a number of times the while loop ran, or rejects with the error thrown if the number of iterations reaches 150,000
const myPromise = new Promise((resolve, reject) => {
  try {
    resolve(longRunningOperation(3));
  } catch (err) {
    reject(err);
  }
});

// to access the value of the fulfilled promise, we call .then() which resolves the value, and .catch() which handles the reject callback if it's invoked -> notice, these methods are chained! .then() returns a Promise...

// JS gets to this line and tries to run the .then(), but the promise state is still 'pending', so data hasn't arrived to be ready to use, yet...
myPromise
  .then((numberOfTrials) => {
    console.log('inside myPromise.then(): ', { numberOfTrials });
  })
  .catch((err) => {
    const error = { from: 'myPromise.catch()', message: err.message };
    console.dir(error);
  })
  // finally() blocks or methods run no matter what
  .finally(() => {
    console.log('running myPromise.finally()');
  });

// or, we could use the async/await keyword pair to "pause" the function execution at the longRunningOperation call and resume after the Promise is resolved -> remember, async/await is just "syntactic sugar" on top of Promises!

async function getNumberOfTrials() {
  try {
    // JS says, i'm not going to move forward until the promise settles
    // so an IOU is registered on the event apparatus
    const numberOfTrials = await myPromise;
    console.log('inside async fn getNumberOfTrials: ', { numberOfTrials });
  } catch (err) {
    // here, like in the Promise.catch() method above
    // we'll handle any errors that are thrown in the body of the try-block
    const error = { from: 'async fn getNumberOfTrials', message: err.message };
    console.dir(error);
  } finally {
    console.log('running getNumberOfTrials finally-block');
  }
}

// notice that even though getNumberOfTrials() runs "after" the myPromise.then() call, the error thrown by exceeding 150,000 trials is logged from the catch-block of getNumberOfTrials() BEFORE the myPromise.catch() statement logs!
// the JS runtime continues to execute code after the Promise is .then()'d, and the value resolves later
// this differs from async/await, which pauses function execution at the await statement and resumes after the Promise has been fulfilled (or rejected)
// the myPromise.finally() and getNumberOfTrials finally block run in reverse order as well, for the same reason

getNumberOfTrials();
