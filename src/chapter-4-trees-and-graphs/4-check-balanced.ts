import Node from '../data-structures/binary-search-tree/node';
import MinimalTree from './2-minimal-tree';

class BSTWithCheckBalanced<T> extends MinimalTree<T> {
  static constructFromArray<T>(array: T[] = []): BSTWithCheckBalanced<T> {
    const newTree = new BSTWithCheckBalanced<T>();

    newTree.root = newTree.constructMinimalTree(array);

    return newTree;
  }

  getHeight(root: Node<T>): number {
    if (root !== undefined && root !== null) {
      return (
        Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1
      );
    }
    return 0;
  }

  isBalanced(root: Node<T> = this.root): boolean {
    if (!root) {
      return true;
    }

    const heightDiff = Math.abs(
      this.getHeight(root.left) - this.getHeight(root.right)
    );

    if (heightDiff > 1) {
      return false;
    }

    return this.isBalanced(root.left) && this.isBalanced(root.right);
  }

  isBalancedImproved(): boolean {
    return this.checkHeight(this.root) !== Number.MIN_SAFE_INTEGER;
  }

  checkHeight(root: Node<T>): number {
    if (!root) return -1;

    const leftHeight = this.checkHeight(root.left);
    if (leftHeight === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER;

    const rightHeight = this.checkHeight(root.right);
    if (rightHeight === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER;

    const heightDiff = Math.abs(leftHeight - rightHeight);

    if (heightDiff > 1) return Number.MIN_SAFE_INTEGER;

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

export default BSTWithCheckBalanced;
