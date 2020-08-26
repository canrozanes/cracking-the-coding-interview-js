const BaseGraph = require('../data-structures/graph');
const Queue = require('../data-structures/queue');

class Graph extends BaseGraph {
  isRouteBetweenBFS(start, end) {
    const hasStart = this.adjList.has(start);
    const hasEnd = this.adjList.has(end);

    if (!hasStart || !hasEnd) {
      return false;
    }
    if (start === end) {
      return true;
    }
    const visited = new Set();

    const queue = new Queue();
    queue.enqueue(start);
    visited.add(start);

    while (!queue.isEmpty()) {
      const vertex = queue.dequeue();
      const adjOfVertex = this.getAdjOfVertex(vertex);
      for (let i = 0; i < adjOfVertex.length; i++) {
        const v = adjOfVertex[i];
        if (!(visited.has(v))) {
          if (v === end) {
            return true;
          }
          visited.add(v);
          queue.enqueue(v);
        }
      }
      visited.add(vertex);
    }
    return false;
  }

  isRouteBetweenDFS(startNode, endNode) {
    const visited = new Set();
    return this._isRouteBetweenDFSRecursive(startNode, endNode, visited);
  }

  _isRouteBetweenDFSRecursive(startNode, endNode, visited) {
    if (startNode === endNode) {
      return true;
    }
    const adjToSearch = this.getAdjOfVertex(startNode).filter((n) => !visited.has(n));

    let isBetween = false;
    for (let i = 0; i < adjToSearch.length; i++) {
      const vertex = adjToSearch[i];
      visited.add(vertex);
      isBetween = this._isRouteBetweenDFSRecursive(vertex, endNode, visited);
      if (isBetween) {
        return true;
      }
    }
    return false;
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');

graph.addEdge('D', 'E');

console.log(graph.isRouteBetweenBFS('A', 'C', graph), true);
console.log(graph.isRouteBetweenBFS('A', 'E', graph), false);
console.log(graph.isRouteBetweenBFS('B', 'A', graph), true);
console.log(graph.isRouteBetweenBFS('D', 'E', graph), true);

module.exports = { Graph };
