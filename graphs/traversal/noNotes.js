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

  depthFirstRecursive(vertex) {
    let list = [];
    let visited = {};
    const depthFirstHelper = (vertex) => {
      if (!this.adjacencyList[vertex].length) return;
      list.push(vertex);
      visited[vertex] = true;
      for (let v of this.adjacencyList[vertex]) {
        if (!visited[v]) depthFirstHelper(v);
      }
    };
    depthFirstHelper(vertex);
    return list;
  }

  depthFirstIterative(vertex) {
    let stack = [vertex];
    let list = [];
    let visited = {};
    let currentVertex;
    visited[vertex] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      list.push(currentVertex);
      visited[currentVertex] = true;
      for (let v of this.adjacencyList[currentVertex]) {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      }
    }
    return list;
  }

  breadthFirst(vertex) {
    let queue = [vertex];
    let list = [];
    let visited = {};
    let currentVertex;
    visited[vertex] = true;
    while (queue.length) {
      console.log(queue);
      currentVertex = queue.shift();
      list.push(currentVertex);
      for (let v of this.adjacencyList[currentVertex]) {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      }
    }
    return list;
  }
}
