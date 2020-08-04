// A stack can easily be implement using an array in Javascript
// because Array data type already has .push() and .pop() operations implemented.
class Stack {
  constructor() {
    this.items = [];
  }

  static create() {
    return new Stack();
  }

  length() {
    return this.items.length;
  }

  isEmpty() {
    return this.length() === 0;
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.length() === 0) {
      return null;
    }
    return this.items[this.length() - 1];
  }
}

module.exports = Stack;
