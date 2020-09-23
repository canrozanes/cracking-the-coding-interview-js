import LinkedList from '../data-structures/linked-list';
import Node from '../data-structures/binary-search-tree/node';
import MinimalTree from './2-minimal-tree';

class BSTWithLisOfDepths<T> extends MinimalTree<T> {
  static constructFromArray<T>(array = []): BSTWithLisOfDepths<T> {
    const newTree = new BSTWithLisOfDepths<T>();

    newTree.root = newTree.constructMinimalTree(array);

    return newTree;
  }

  listOfDepths(): LinkedList<T>[] {
    return this.listOfDepthsHelper(this.root);
  }

  listOfDepthsHelper<T>(
    root: Node<T>,
    lists: LinkedList<T>[] = [],
    depthLevel: number = 0
  ) {
    if (root) {
      if (!lists[depthLevel]) {
        lists[depthLevel] = new LinkedList();
      }

      lists[depthLevel].append(root.value);

      this.listOfDepthsHelper(root.left, lists, depthLevel + 1);
      this.listOfDepthsHelper(root.right, lists, depthLevel + 1);
    }

    return lists;
  }
}

export default BSTWithLisOfDepths;
