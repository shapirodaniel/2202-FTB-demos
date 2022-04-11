/* 
  data we'd like to hash and store, as a list of key-value pairs:

  john   = 5551234567
  jane   = 5552345678
  alice  = 5553456789
  bob    = 5559876543
  mary   = 5558887777
  albert = 5550001234

  if our hash table has fewer than 6 slots
  we're going to need to handle collisions
  by creating linked lists at each slot
  and chaining any key-value pairs that hash
  to the same index off the list at that index
*/

class LLNode {
  // value is an object { key: string, data: any }
  // next is a LLNode instance or null
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  // every linked list will be instantiated as a new LLNode
  // with a value object { key, data }
  constructor(key, data) {
    this._head = new LLNode({ key, data });
  }

  // this function "upserts" (updates or inserts) data by either
  // overwriting an existing node's value.data property
  // if the value.key matches the supplied key
  // or adding a new LLNode to the tail of the list
  // at the hashed key's table index
  upsert(key, data) {
    let curr = this._head;

    while (curr) {
      if (curr.value.key === key) {
        curr.value.data = data;
        return this;
      }

      curr = curr.next;
    }

    curr.next = new LLNode({ key, data });
    return this;
  }
}

class HashTable {
  constructor(length) {
    this._table = new Array(length);
  }

  _getHashedIndex(key) {
    let hashedTotal = 0;

    for (let i = 0; i < key.length; i++) {
      const hashedValue = key[i].charCodeAt(0);
      hashedTotal += hashedValue;
    }

    const slot = Math.floor(hashedTotal % this._table.length);
    return slot;
  }

  add(key, value) {
    const index = this._getHashedIndex(key);

    if (this._table[index] instanceof LinkedList) {
      const list = this._table[index];
      list.upsert(key, value);
    } else {
      this._table[index] = new LinkedList(key, value);
    }
  }

  search(key) {
    const index = this._getHashedIndex(key);
    const list = this._table[index];

    if (!list) {
      return undefined;
    }

    let curr = list._head;

    while (curr) {
      // value here is { key, data }
      const { value } = curr;
      if (value.key === key) return value.data;

      curr = curr.next;
    }
  }

  prettyPrint() {
    console.dir(this, { depth: null });
  }
}

// modify the length supplied to the HashTable constructor here
// to see how different values result in different key-value pair
// distributions across the hash table!
const myHashTable = new HashTable(13);

myHashTable.add('john', '5551234567');
myHashTable.add('jane', '5552345678');
myHashTable.add('alice', '5553456789');
myHashTable.add('bob', '5559876543');
myHashTable.add('mary', '5558887777');
myHashTable.add('albert', '5550001234');

myHashTable.prettyPrint();

// testing upsert logic
const bobBeforeUpsert = myHashTable.search('bob');
myHashTable.add('bob', '2223334444');
const bobAfterUpsert = myHashTable.search('bob');

console.log({ bobBeforeUpsert }); // 5559876543
console.log({ bobAfterUpsert }); // 2223334444
