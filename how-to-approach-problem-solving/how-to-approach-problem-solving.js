// the tests below won't run in this environment
// however, they will run in the codepen link
// so feel free to copy the above logic over to here:
// https://codepen.io/FullstackAcademy/pen/zWqoXy?editors=0010

// YOUR CODE BELOW
function evenAndOdd(array) {
  /* start with the pseudocode! */
  /* optionally, use drawing tools like https://excalidraw.com to help visualize */

  // i need to look at every element in my input array
  // and sort them by even or odd
  // i'll need an evenArray to hold the even values
  // and an oddArray to hold the odd values
  // then from there, i can loop the input array
  // and check each value to determine which array it should be added to

  // hey wait a minute! why are those consts? don't we want to mutate these values?
  const oddArray = [];
  const evenArray = [];

  for (let i = 0; i < array.length; i++) {
    // const currentValue = array[i]

    // checking for even vs odd
    if (array[i] % 2 === 0) {
      // this is my even case
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }

  // return an array that contains both of these arrays
  return [evenArray, oddArray];
}

describe('evenAndOdd', () => {
  it('is a function', () => {
    expect(typeof evenAndOdd).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = evenAndOdd([1, 2, 3]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns an array where the first element has all the even numbers from the original array', () => {
    let returnedValue = evenAndOdd([10, 15, 20, 25, 30]);
    expect(returnedValue[0]).toEqual([10, 20, 30]);
  });

  it('returns an array where the second element has all the odd numbers from the original array', () => {
    let returnedValue = evenAndOdd([7, 14, 21, 28, 35]);
    expect(returnedValue[1]).toEqual([7, 21, 35]);
  });
});
