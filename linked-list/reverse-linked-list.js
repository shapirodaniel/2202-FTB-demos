/* 
  write a function that takes in a linked list structured:

  LinkedList: {
    head: LLNode {
      value: any,
      next: ... LLNodes ...
    }
    next: { ... ListNodes ... }
  }

  and reverses the order of the list nodes, returning a new list
*/

class LLNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head = null;

  addToHead(value) {
    if (!this.head) {
      this.head = new LLNode(value);
      return this;
    }

    const newNode = new LLNode(value, this.head);
    this.head = newNode;
    return this;
  }
}

const list = new LinkedList();

list
  .addToHead(1)
  .addToHead(2)
  .addToHead(3)
  .addToHead(4)
  .addToHead(5)
  .addToHead(6);

console.dir(list, { depth: null });
// yields a list structured: 6 -> 5 -> 4 -> 3 -> 2 -> 1

/* iterative solution */

function reverseLLIterative(list) {
  let curr = list.head,
    previous = null,
    next = curr.next;

  while (curr) {
    curr.next = previous;
    previous = curr;
    curr = next;
    // guard against the last node's next == null value
    if (curr) next = curr.next;
  }

  list.head = previous;
  return list;
}

/* recursive solution */

// head -> 1 -> 2
// head -> 2 -> 1
function reverseLLRecursive(list) {
  if (!list.next) {
    return list;
  }

  list.next = reverseLLRecursive(list.next);
  list.head = list;
  return list;
}

const reversedListIterative = reverseLLIterative(list);
const reversedListRecursive = reverseLLRecursive(list);
console.log(list.head === reversedListIterative.head); // true
console.log(list.head === reversedListRecursive.head); // true
console.dir(reversedListRecursive, { depth: null });

// console.dir(list, { depth: null });
// should yield a list structured: 1 -> 2 -> 3 -> 4 -> 5 -> 6
