const Stack = require('../data-structures/stack');

class MyQueue {
  constructor() {
    this.frontStack = Stack.create();
    this.backStack = Stack.create();
  }

  static create() {
    return new MyQueue();
  }

  length() {
    return this.frontStack.length() + this.backStack.length();
  }

  isEmpty() {
    return this.length() === 0;
  }

  enqueue(value) {
    this.frontStack.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.backStack.isEmpty()) {
      this.shiftFromFrontToBack();
    }
    return this.backStack.pop();
  }

  shiftFromFrontToBack() {
    while (!this.frontStack.isEmpty()) {
      const temp = this.frontStack.pop();
      this.backStack.push(temp);
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.backStack.isEmpty()) {
      this.shiftFromFrontToBack();
    }
    return this.backStack.peek();
  }
}

module.exports = MyQueue;
