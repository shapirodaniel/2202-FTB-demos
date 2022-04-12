class LLNode {
  // remember! this refers to the INSTANCE of the class
  // that we'll create by invoking the constructor
  // via the new LLNode() pattern
  constructor(value, previous = null, next = null) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}

class LinkedList {
  // no let / const / var here
  // because these are object properties
  // of the instance of the class
  head = null;
  tail = null;

  // the instance of LinkedList will have head, tail properties
  // which we can't assign via variable declaration keywords
  // since those aren't syntactically viable
  // on an object property definition

  addToTail(value) {
    // is there a tail yet?
    // if not:
    if (!this.tail) {
      this.head = this.tail = new LLNode(value);
      return this;
    }

    // our list is not empty
    // we need to do a bit of additional work
    // to add a tail node
    const newTail = new LLNode(value, this.tail);
    this.tail.next = newTail;
    this.tail = newTail;
    return this;
  }

  addToHead(value) {
    if (!this.head) {
      this.head = this.tail = new LLNode(value);
      return this;
    }

    const newHead = new LLNode(value, null, this.head);
    this.head.previous = newHead;
    this.head = newHead;
    return this;
  }

  deleteFromTail() {
    // return the value from the deleted node
    if (!this.tail) {
      return null;
    }

    const returnValue = this.tail.value;

    // this is our new tail node
    const penultimateNode = this.tail.previous;
    this.tail = penultimateNode;
    this.tail.next = null;

    return returnValue;
  }

  deleteFromHead() {
    if (!this.head) {
      return null;
    }

    const returnValue = this.head.value;

    // this is our new head node
    const secondNodeFromFront = this.head.next;
    this.head = secondNodeFromFront;
    this.head.previous = null;

    return returnValue;
  }

  // optimal search would involve two pointers
  // start from BOTH head and tail
  // and search until they meet or crossover
  search(value) {
    // if the list is empty, return false
    if (!this.head) {
      return false;
    }
    // initialize the traversal pointer with "let" keyword
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return true;
      }
      // traversing or "walking" a linked list
      // we assign the pointer we're using to traverse
      // to the next value, thereby walking along the list
      // until we "fall off the end" of the list
      curr = curr.next;
    }
    return false;
  }

  log() {
    console.dir(this, { depth: null });
  }
}

const list = new LinkedList();
list.log();

list.addToTail('pizza');
list.log();

// if our tail and head pointers are the same, we have exactly one node
// in our list, and since objects are passed by reference in JavaScript
// they should be strictly equal to one another
console.log(list.tail === list.head); // true

list.addToTail('salad');
list.log();

list.addToTail('cheeseburger');
list.log();

list.addToHead('french fries');
list.log();

console.log('deleted from tail:', list.deleteFromTail()); // yields 'cheeseburger'
list.log();

console.log('deleted from head:', list.deleteFromHead()); // yields 'french fries'
list.log();

console.log('search for "salad"', list.search('salad')); // yields true
console.log('search for "calzone"', list.search('calzone')); // yields false
