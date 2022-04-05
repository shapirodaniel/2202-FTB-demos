const { size, traverse, removeFromTail, addToTail } = require('./linked-list');

class Stack {
  _stack = null;
  size = 0;

  push(value) {
    this._stack = addToTail(value, this._stack);
    this.size = size(this._stack);
    return this.size;
  }

  pop() {
    return removeFromTail(this._stack);
  }

  peek() {
    const { node: tail } = traverse(this._stack);
    return tail;
  }
}

module.exports = { StackWithLinkedList: Stack };
