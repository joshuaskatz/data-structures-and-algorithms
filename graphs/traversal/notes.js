//Undirected graph using an adjacency list
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //Accepts name of a vertex
  //It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
  //If the key already exists don't add the vertex
  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }
  //This function should accept two vertices
  //The function should find in the adjacency list, the key of the first vertex and push the second vertex to the array
  //The function should find in the adjacency list the key of the second vertex and push the first vertex to the array
  //Only do this if the edge doesn't already exist
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);
    if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
  }
  //This function should accept two vertices
  //The function should reaasign the key of vertex1 to be an array that does not contain vertex2
  //The function should reassign the key of vertex2 to be an array that does not contain vertex1
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1].includes(v2)) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    }
    if (this.adjacencyList[v2].includes(v1)) {
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }
  }
  //The function should accept a vertex to remove
  //The function should loop as long as there are any other vertices in the adjacency list for that vertex
  //Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the ajacency list for that vertex
  //Delete the key in the adjacency list for that vertex
  removeVertex(vertex) {
    if (!this.adjacencyList) return null;
    if (!this.adjacencyList[vertex]) return null;
    for (let v of this.adjacencyList[vertex]) {
      this.removeEdge(v, vertex);
    }
    delete this.adjacencyList[vertex];
  }
  //The function should accept a starting node
  //Create a list to store the end result, to be returned at the very end
  //Create an object to store visited vertices
  //Create a helper function which accepts a vertex
  //The helper function should return early if the vertex is empty
  //The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
  //Loop over all of the values in the adjacencyList for that vertex
  //If any of those values have not been visited, recursively invoke the helper function with that vertex.
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
  //The function should accept a starting node
  //Create a stack to help keep track of vertices (array)
  //Create a list to store the end result, to be returned.
  //Create an object to store visited vertices
  //Add the starting vertex to the stack, and mark it visited
  //While the stack has something in it:
  //    Pop the next vertex from the stack
  //    If that vertex hasn't been visited yet:
  //        Mark it as visited
  //        Add it to the result list
  //        Push all of its neighbors into the stack
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
  //The function should accept a starting node
  //Create a queue to help keep track of vertices (array)
  //Create a list to store the end result, to be returned.
  //Create an object to store visited vertices
  //Add the starting vertex to the queue, and mark it visited
  //While the queue has something in it:
  //    Shift the first vertex from the queue
  //    If that vertex hasn't been visited yet:
  //        Mark it as visited
  //        Add it to the result list
  //        Push all of its neighbors into the queue
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

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.breadthFirst("A"));
