const LinkedList = require('./linked-list');

class Queue {
  constructor() {
    this.items = new LinkedList();
  }

  static create() {
    return new Queue();
  }

  enqueue(item) {
    this.items.append(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.head.value;
  }

  length() {
    return this.items.length();
  }

  isEmpty() {
    return this.length() === 0;
  }
}

module.exports = Queue;
