class Queue {
  constructor() {
    this.items = [];
  }

  static create() {
    return new Queue();
  }

  enqueue(item) {
    this.items.push(item);
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
    return this.items[0];
  }

  length() {
    return this.items.length;
  }

  isEmpty() {
    return this.length() === 0;
  }
}

module.exports = Queue;
