/* recursive solution */
const printListInReverseRecursive = (list) => {
  if (!list) return;
  printListInReverseRecursive(list.next);
  console.log(list.value);
};

/* iterative solution */
const printListInReverseIter = (list) => {
  let stack = [];
  let iter = { ...list };

  while (iter) {
    stack.push(iter.value);
    iter = iter.next;
  }

  while (stack.length) {
    console.log(stack.pop());
  }
};

const list = {
  value: 6,
  next: {
    value: 7,
    next: {
      value: 8,
      next: null,
    },
  },
};

printListInReverseIter(list); // logs: 8 7 6
printListInReverseRecursive(list); // logs: 8 7 6
