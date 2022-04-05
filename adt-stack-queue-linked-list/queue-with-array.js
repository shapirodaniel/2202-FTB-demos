class Queue {
  _queue = [];
  end = -1; // support 0-indexed _queue

  enqueue(ele) {
    this._queue.unshift(ele);
    this.end++;
    return this.end;
  }

  dequeue() {
    const ele = this._queue.pop();
    this.end--;
    return ele;
  }

  peek() {
    return this._queue[this.end];
  }
}

module.exports = { QueueWithArray: Queue };
