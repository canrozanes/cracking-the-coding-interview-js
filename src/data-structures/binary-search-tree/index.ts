import Node from './node';

class BinarySearchTree<T> {
  root: Node<T>;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new Node<T>(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(targetNode: Node<T>, newNode: Node<T>) {
    if (targetNode.value > newNode.value) {
      if (targetNode.left === null) {
        targetNode.left = newNode;
      } else {
        this.insertNode(targetNode.left, newNode);
      }
    }
    if (targetNode.value < newNode.value) {
      if (targetNode.right === null) {
        targetNode.right = newNode;
      } else {
        this.insertNode(targetNode.right, newNode);
      }
    }
  }

  private dfsHelper(node: Node<T>, result: T[] = []): T[] {
    if (node) {
      this.dfsHelper(node.left, result);
      if (node.value !== undefined) {
        result.push(node.value);
      }
      this.dfsHelper(node.right, result);
    }
    return result;
  }

  dfs(): T[] {
    return this.dfsHelper(this.root);
  }
}

export default BinarySearchTree;
