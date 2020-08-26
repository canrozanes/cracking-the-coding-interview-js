class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
    this.value = null;
  }
}

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  getAdjOfVertex(v) {
    if (!this.adjList.has(v)) {
      throw new Error('the vertex does not exist');
    }
    return Array.from(this.adjList.get(v));
  }

  printGraph() {
    const vertices = Array.from(this.adjList.keys());

    // iterate over the vertices
    for (let i = 0; i < vertices.length; i++) {
      const adjList = this.adjList.get(vertices[i]);
      let adjVertices = '';

      for (let j = 0; j < adjList.length; j++) {
        adjVertices += `${adjList[j]} `;
      }
      // eslint-disable-next-line
      console.log(`${vertices[i]} -> ${adjVertices}`);
    }
  }
}

const g = new Graph();
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();

module.exports = Graph;
