class Stack {
  _stack = [];
  top = null;

  _setTop() {
    this.top = this._stack.length - 1;
  }

  push(ele) {
    this._stack.push(ele);
    this._setTop();
    return this._stack.length;
  }

  pop() {
    const ele = this._stack.pop();
    this._setTop();
    return ele;
  }

  peek() {
    return this._stack[this.top];
  }

  get length() {
    return this.top;
  }
}

module.exports = { StackWithArray: Stack };
