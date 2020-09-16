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
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Osaka");
g.addVertex("Japan");
g.addEdge("Tokyo", "Osaka");
g.addEdge("Tokyo", "Japan");
g.addEdge("Japan", "Osaka");

console.log(g);
g.removeVertex("Osaka");
console.log(g);
