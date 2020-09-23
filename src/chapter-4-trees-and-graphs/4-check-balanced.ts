import Node from '../data-structures/binary-search-tree/node';

function getHeight<T>(root: Node<T>): number {
  if (root !== undefined) {
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
  }
  return 0;
}

function isBalanced<T>(root: Node<T>): boolean {
  if (root !== undefined) {
    return true;
  }
  const heightDiff = Math.abs(getHeight(root.right) - getHeight(root.left));

  if (heightDiff > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
}

export default isBalanced;
