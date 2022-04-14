// write a function rehash which takes in
// an existing hash table, generates
// a new hash table of double size,
// minimizing the length of any
// lists that result from separate chaining

// existing hash table
const input = [
  {
    key: 'pizza',
    value: 'pizza',
    next: {
      key: 'cheeseburger',
      value: 'cheeseburger',
      next: null,
    },
  },
  {
    key: 'salad',
    value: 'salad',
    next: {
      key: 'vinaigrette',
      value: 'vinaigrette',
      next: null,
    },
  },
  {
    key: 'mango',
    value: 'mango',
    next: {
      key: 'strawberry',
      value: 'strawberry',
      next: {
        key: 'banana',
        value: 'banana',
        next: null,
      },
    },
  },
];

// if a value would still hash to the same spot
// we want to redistribute it through "open addressing"
// rehash(input); // -> [ {}, {}, {}, {} ]

/* how are values currently hashed? let's imagine */
const hash = (key, len) => {
  let result = 0;
  for (let i = 0; i < key.length; i++) {
    result += key.charCodeAt(i);
  }
  return Math.floor(result % len);
};

// hopToFreeIndex assumes we've got a table of at least len == 4
// choosing an initial i value of 3 lets us
// hit every slot in our result table

// the length assumption is reasonable as hash tables are often
// at least double the size of the number of unique key-value pairs
// that will be assigned, so a hash table of length <= 2
// isn't an expected edge case (not much utility in such a small table)

function hopToFreeIndex(table) {
  const len = table.length;
  let i = 3;

  // make sure iterator is not a factor of len
  // to avoid cycles that never touch certain table slots
  while (len % i === 0 && len - i <= 2) {
    i++;
  }

  let freeIndex = i,
    count = 0;

  // only increment count while we still have unvisited cArray slots
  // and we've hit an occupied slot
  while (count < len && table[freeIndex]) {
    freeIndex += i;
    if (freeIndex >= len) freeIndex -= len;
    count++;
  }

  return freeIndex;
}

function makeNode(key, value) {
  return { key, value, next: null };
}

function rehash(input) {
  const result = new Array(input.length * 2);

  for (const list of input) {
    if (!list) continue;

    let curr = list;

    while (curr) {
      const index = hash(curr.key, result.length);

      if (!result[index]) {
        result[index] = makeNode(curr.key, curr.value);
      } else {
        // find an open address
        // or, iterate all open addresses and stick to the hashed value
        // we ended up with the first time
        const freeIndex = hopToFreeIndex(result);

        if (result[freeIndex]) {
          let resultIterator = result[freeIndex];

          while (resultIterator.next) {
            resultIterator = resultIterator.next;
          }

          resultIterator.next = makeNode(curr.key, curr.value);
        } else {
          result[freeIndex] = makeNode(curr.key, curr.value);
        }
      }

      curr = curr.next;
    }
  }

  return result;
}

const rehashedTable = rehash(input);
console.dir(rehashedTable);

// a great test for this algorithm would be an imperfectly hashed table
// ie, if our hash function returns a constant value no matter the input,
// where the underlying function has placed all nodes in the same slot

// to set up that test case, we'll initialize a new empty array
// build a linked list of several nodes, and attach the list
// to a slot in the imbalanced hash table

// we should expect these nodes to be distributed evenly across the
// free slots of the rehashed table

const imbalancedHashTable = new Array(3);
imbalancedHashTable[1] = {
  key: 'a',
  value: 'apple',
  next: {
    key: 'b',
    value: 'burrata',
    next: {
      key: 'c',
      value: 'cake',
      next: {
        key: 'd',
        value: 'dumplings',
        next: null,
      },
    },
  },
};

console.dir(imbalancedHashTable, { depth: null });
console.dir({ result: rehash(imbalancedHashTable) });
