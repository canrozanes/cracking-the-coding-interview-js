import Node from '../data-structures/binary-search-tree/node';

function constructMinimalTree<T>(array: T[]): Node<T> {
  const half = Math.floor(array.length / 2);

  const left = array.slice(0, half);
  const right = array.slice(half + 1, array.length);

  const root = new Node<T>(array[half]);

  if (left.length > 0) {
    root.left = constructMinimalTree(left);
  }
  if (right.length > 0) {
    root.right = constructMinimalTree(right);
  }

  return root;
}

function dfsHelper<T>(node: Node<T>, result: T[]): T[] {
  if (node) {
    dfsHelper(node.left, result);
    if (node.data !== undefined) {
      result.push(node.data);
    }
    dfsHelper(node.right, result);
  }
  return result;
}

export function dfs<T>(node: Node<T>): T[] {
  const result = [];

  return dfsHelper(node, result);
}

export default constructMinimalTree;
