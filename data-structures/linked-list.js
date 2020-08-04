class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  static create(array = []) {
    const newList = new LinkedList();
    for (let i = 0; i < array.length; i++) {
      newList.append(array[i]);
    }
    return newList;
  }

  append(value) {
    const node = new Node(value);
    // if list is empty
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this;
  }

  length() {
    let temp = this.head;
    let countOfNodes = 0;

    while (temp) {
      temp = temp.next;
      countOfNodes += 1;
    }
    return countOfNodes;
  }

  // insert one item to array
  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  // this method is only for testing and has an O(n) look-up,
  // if you think you need this, use an array instead.
  _getNodeByIndex(index) {
    let temp = this.head;
    let countOfNodes = 0;

    if (temp === null) {
      return;
    }
    let runner = temp.next;
    while (runner) {
      if (countOfNodes === index) {
        return temp;
      }
      temp = runner;
      runner = runner.next;
      countOfNodes += 1;
    }
    // check for the last node
    if (countOfNodes === index) {
      return temp;
    }
  }

  toArray() {
    const array = [];
    let cur = this.head;
    while (cur) {
      array.push(cur.value);
      cur = cur.next;
    }

    return array;
  }
}

module.exports = LinkedList;