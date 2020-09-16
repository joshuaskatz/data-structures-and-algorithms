//Undirected graph using an adjacency list
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);
    if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1].includes(v2)) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    }
    if (this.adjacencyList[v2].includes(v1)) {
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList) return null;
    if (!this.adjacencyList[vertex]) return null;
    for (let v of this.adjacencyList[vertex]) {
      this.removeEdge(v, vertex);
    }
    delete this.adjacencyList[vertex];
  }
}
