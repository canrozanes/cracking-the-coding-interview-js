import Node from './node';

class BinarySearchTree<T> {
  root: Node<T>;

  constructor() {
    this.root = null;
  }

  insert(data: T) {
    const newNode = new Node<T>(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(targetNode: Node<T>, newNode: Node<T>) {
    if (targetNode.data > newNode.data) {
      if (targetNode.left === null) {
        targetNode.left = newNode;
      } else {
        this.insertNode(targetNode.left, newNode);
      }
    }
    if (targetNode.data < newNode.data) {
      if (targetNode.right === null) {
        targetNode.right = newNode;
      } else {
        this.insertNode(targetNode.right, newNode);
      }
    }
  }
}

export default BinarySearchTree;
