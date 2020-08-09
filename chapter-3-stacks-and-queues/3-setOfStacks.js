const Stack = require('../data-structures/stack');

class SetOfStacks {
  constructor(maxIndividualLength) {
    this.stackOfStacks = Stack.create();
    this.maxIndividualLength = maxIndividualLength;
  }

  static create(maxIndividualLength = 10) {
    if (maxIndividualLength < 1) {
      throw new Error('length of each stack has to a positive number');
    }
    return new SetOfStacks(maxIndividualLength);
  }

  push(value) {
    const currentStack = this.stackOfStacks.peek();
    if (this.isEmpty() || currentStack.length() === this.maxIndividualLength) {
      const newStack = Stack.create();
      newStack.push(value);
      this.stackOfStacks.push(newStack);
    } else {
      currentStack.push(value);
    }
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const currentStack = this.stackOfStacks.peek();
    if (currentStack.length() === 1) {
      this.stackOfStacks.pop();
    }
    return currentStack.pop();
  }

  length() {
    if (this.stackOfStacks.length() === 0) {
      return 0;
    }
    return (this.stackOfStacks.length() - 1) * this.maxIndividualLength
      + this.stackOfStacks.peek().length();
  }

  isEmpty() {
    return this.length() === 0;
  }
}

module.exports = SetOfStacks;
