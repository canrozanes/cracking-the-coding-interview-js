const LinkedList = require('./linked-list');

class Stack {
  constructor(items) {
    this.items = LinkedList.create(items);
  }

  static create(items) {
    return new Stack(items);
  }

  length() {
    return this.items.length();
  }

  isEmpty() {
    return this.length() === 0;
  }

  push(value) {
    this.items.unshift(value);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  peek() {
    if (this.length() === 0) {
      return null;
    }
    return this.items.head.value;
  }

  toArray() {
    // toArray() requires a reverse() because unlike an array,
    // linked-list implementation of a stack has linked-lists head as its head
    return this.items.toArray().reverse();
  }
}

module.exports = Stack;
