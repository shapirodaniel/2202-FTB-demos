/* Write a function which takes in a number and a sorted array of numbers. Return true if any 2 numbers could add up to the number passed in. */

// ok so if we get targetNum == 8 and 4 is present in our inputArray
// how do we exclude using the same value twice?

// function findSum(targetNum, sortedNumArray) {
//   // we know that targetNum is an integer, could be 6
//   // we know that sortedNumArray could be [ -1, 0, 2, 4, 5 ]
//   // our function should return true in this case because 2 + 4 == 6

//   // let's build a hash map (object)
//   // store every value as a key-val pair
//   // where the value + key == targetNum
//   const hashMap = {};

//   for (const num of sortedNumArray) {
//     hashMap[num] = targetNum - num; // if targetNum is 6, then 6 - (-1) == 7
//     // the next time we try to grab hashMap[-1] >> 7
//   }

//   /*
//     {
//       '0': 6,
//       '2': 4,
//       '4': 2,
//       '5': 1,
//       '-1': 7
//     }
//   */

//   console.dir(hashMap);

//   for (const num of sortedNumArray) {
//     // how can i use each number to find out if there's a complementary number
//     // that will sum to the targetNum?

//     // this gives us whatever number we're looking for!
//     // ie, if targetNum is 6 and complement is 4
//     // we know that we're currently on value 2 in our sortedNumArray
//     const complement = hashMap[num];
//     console.log(complement);

//     console.log(hashMap[complement]);

//     if (hashMap[complement]) {
//       console.log('hit this part');
//       return true;
//     }
//   }

//   return false;
// }

// what failed in my initial approach?
// in my initial approach, i failed to account for a corner case
// where i was using the same number twice to sum to the target
// ie, if [1,2,4] and i'm looking for targetNum == 8
// my algo did not account for 4 + 4 being unavailable
// ... so what's next?

const findSum = (target, input) => {
  // how can we use the sorted input array to our advantage?
  // let's say our targetNum was 9
  // and our inputArray was:
  // [-1, 0, 2, 3, 6, 7, 13]

  // what happens if we start at the end of both sides of the array?
  // what's the sum of those values?
  // what happens if that sum is > target?
  // what if it's < target?
  // what if it's == target?

  let left, right;

  left = 0;
  right = input.length - 1;

  // if we move our left, right pointers toward one another
  // at each move, we can check the sum of values
  // by accessing the inputArray for each pointer
  // and we can say hey is this sum what i'm looking for?
  // if so, return true :)
  // if not, we need to know which pointer to move
  while (left < right) {
    const sum = input[left] + input[right];
    console.log(sum);

    if (sum === target) {
      return true;
    }

    if (sum < target) {
      // if sum was less than target, move which pointer?
      ++left;
      continue;
    }

    if (sum > target) {
      --right;
      continue;
    }
  }

  return false;
};

const target = 8;
const inputArray = [-1, 0, 2, 4, 5];
// const target = 4;
// const inputArray = [-1, 0, 2, 3, 6, 7, 13];

console.log(findSum(target, inputArray));

// output is:
