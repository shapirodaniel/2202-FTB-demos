const { StackWithArray } = require('./stack-with-array');
const { StackWithLinkedList } = require('./stack-with-linked-list');
const { QueueWithArray } = require('./queue-with-array');
const LinkedList = require('./linked-list');

function logIt() {
  console.log('hi im fn');
}

// dependency injection just means
// inject the blueprint for the object
// rather than object itself
// and make the controlling function
// responsible for instantiating the object
function testStack(stackClass) {
  const stack = new stackClass();
  stack.push('hello');
  stack.push('world');
  stack.push(7);
  stack.push(logIt);
  stack.pop()();
  stack.push(null);
  const top = stack.peek();
  console.dir({ stack: stack._stack, top }, { depth: null });
}

testStack(StackWithArray);
testStack(StackWithLinkedList);

function testQueue() {
  const queue = new QueueWithArray();
  queue.enqueue('hello');
  queue.enqueue('world');
  queue.enqueue(7);
  queue.enqueue(logIt);
  const helloWorld = queue.dequeue() + ' ' + queue.dequeue();
  console.log({ helloWorld });
  const end = queue.peek();
  console.log({ peekedQueueValue: end });
}

testQueue();

function testLinkedList() {
  let list = LinkedList.createNode(7);
  LinkedList.setHead(list);
  list.next = LinkedList.createNode(8);
  list.next.next = LinkedList.createNode(9);

  /* 
    should yield:

    {
      value: 7,
      next: { value: 8, next: { value: 9, next: null } },
      isHead: true
    } 
  */
  console.dir(list, { depth: null });

  list = LinkedList.addToHead(6, list);

  /* 
    should yield:

    {
      value: 6,
      next: { value: 7, next: { value: 8, next: { value: 9, next: null } } },
      isHead: true
    },
    { size: 4 } 
  */
  console.dir(list, { depth: null });
  console.log({ size: LinkedList.size(list) });

  list = LinkedList.removeFromHead(list);

  /* 
    should yield:

    {
      value: 7,
      next: { value: 8, next: { value: 9, next: null } },
      isHead: true
    } 
  */
  console.dir(list, { depth: null });

  /* 
    should yield:

    {
      node: {
        value: 7,
        next: { value: 8, next: { value: 9, next: null } },
        isHead: true
      },
      index: 0
    }
  */
  console.dir(LinkedList.traverse(list, 0), { depth: null });
}

testLinkedList();
