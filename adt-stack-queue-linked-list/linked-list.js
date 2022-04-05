function createNode(value, next = null) {
  return { value, next };
}

function setHead(node) {
  node.isHead = true;
}

function addToHead(value, list) {
  if (!list) {
    return createNode(value);
  }

  delete list.isHead;
  const newHead = createNode(value, list);
  setHead(newHead);
  return newHead;
}

function traverse(list, index) {
  if (!list) return { node: null, index: 0 };

  let curr = list;
  let idx = 0;

  while (curr.next) {
    if (index !== (null || undefined) && idx === index) break;
    curr = curr.next;
    idx++;
  }

  return { node: curr, index: idx };
}

function size(list) {
  const { index } = traverse(list);
  // adjust for 0-indexed traversal
  return index + 1;
}

function addToTail(value, list) {
  const { node: tail } = traverse(list);
  if (!tail) {
    return createNode(value);
  }
  tail.next = createNode(value);
  return list;
}

function removeFromHead(list) {
  if (!list) return null;
  if (!list.next) {
    list = null;
  } else {
    list = list.next;
    setHead(list);
  }
  return list;
}

function removeFromTail(list) {
  if (!list) return null;
  if (!list.next) {
    list = null;
    return list;
  }

  let curr = list;

  while (curr.next && curr.next.next) {
    curr = curr.next;
  }

  const { value } = curr.next;
  curr.next = null;
  return value;
}

module.exports = {
  createNode,
  traverse,
  removeFromTail,
  removeFromHead,
  addToHead,
  addToTail,
  size,
  setHead,
};
