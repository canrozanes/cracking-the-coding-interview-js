const Stack = require('../data-structures/stack');

class MinStack extends Stack {
  constructor() {
    super();
    this._min = null;
    this._minStack = new Stack();
  }

  static create() {
    return new MinStack();
  }

  getMin() {
    return this._min;
  }

  push(value) {
    if (typeof value !== 'number') {
      throw new Error('MinStack only takes numbers');
    }
    if (this._min === null || value < this._min) {
      this._min = value;
      this._minStack.push(value);
    }
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const poppedValue = this.items.pop();
    if (poppedValue === this._min) {
      this._minStack.pop();
      if (this._minStack.isEmpty()) {
        this._min = null;
      } else {
        const newMin = this._minStack.peek();
        this._min = newMin;
      }
    }
    return poppedValue;
  }
}

module.exports = MinStack;
