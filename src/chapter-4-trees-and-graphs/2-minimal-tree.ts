import Node from '../data-structures/binary-search-tree/node';
import BinarySearchTree from '../data-structures/binary-search-tree';

class MinimalTree<T> extends BinarySearchTree<T> {
  // root: Node<T> | null;

  static constructFromArray<T>(array = []): MinimalTree<T> {
    const newTree = new MinimalTree<T>();

    newTree.root = newTree.constructMinimalTree(array);

    return newTree;
  }

  constructMinimalTree(array: T[], root: Node<T> = this.root) {
    const arrayLength = array.length;
    const half = Math.floor(arrayLength / 2);

    const left = array.slice(0, half);
    const right = array.slice(half + 1, array.length);

    root = new Node<T>(array[half]);
    if (left.length > 0) {
      root.left = this.constructMinimalTree(left, root.left);
    }
    if (right.length > 0) {
      root.right = this.constructMinimalTree(right, root.right);
    }

    return root;
  }
}

export default MinimalTree;
