const Stack = require('../data-structures/stack');

class SortableStack extends Stack {
  static create(items) {
    return new SortableStack(items);
  }

  sort() {
    if (this.isEmpty()) {
      return this;
    }
    const sortedStack = Stack.create();

    while (!this.isEmpty()) {
      const temp = this.pop();
      while (!sortedStack.isEmpty() && sortedStack.peek() > temp) {
        const poppedFromSorted = sortedStack.pop();
        this.push(poppedFromSorted);
      }
      sortedStack.push(temp);
    }
    while (!sortedStack.isEmpty()) {
      this.push(sortedStack.pop());
    }
    return this;
  }
}

module.exports = SortableStack;
