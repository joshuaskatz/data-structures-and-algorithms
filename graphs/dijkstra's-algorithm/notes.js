class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

//Implement a priority queue
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  //Sort each time we enque a value
  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.values.push(node);
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[parentIdx].priority > this.values[idx].priority) {
        let temp = this.values[parentIdx];
        this.values[parentIdx] = this.values[idx];
        this.values[idx] = temp;
        idx = parentIdx;
        parentIdx = Math.floor((idx - 1) / 2);
      } else break;
    }
    return this.values;
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    let idx = 0;
    const length = this.values.length;
    const node = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < node.priority) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (!swap && rightChild.priority < node.priority) ||
          (swap && rightChild.priority < leftChild.priority)
        )
          swap = rightChildIdx;
      }
      if (!swap) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = node;
      idx = swap;
    }

    return min;
  }
}

//Weighted graph
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  //Like the unweighted graph, however we will be storing objects to represent the edges in the adjacency list like so:
  // A: [{node: "B", weight: 10}, {node:"C", weight: 15}]
  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1].some((edge) => edge.node === v2))
      this.adjacencyList[v1].push({ node: v2, weight });
    if (!this.adjacencyList[v2].some((edge) => edge.node === v1))
      this.adjacencyList[v2].push({ node: v1, weight });
  }
  //This function should accept a starting and ending vertex
  //Create an object (distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
  //After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because thats where we begin.
  //Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
  //Start looping as long as there is anything in the priority queue:
  //  Dequeue a vertex from the priority queue
  //  If the vertex is the same as the ending vertex, we are done.
  //  Otherwise loop through each value in the adjacency list at that vertex:
  //      Calculate the distance to that vertex from the starting vertex
  //      If the distance is less than what is currently stored in our
  //      distances object:
  //          Update the distances object with new lower distance
  //          Update the previous object to contain that vertex
  //          Enqueue the vertex with the total distance from the start node
  dijkstra(start, end) {
    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};
    //To return at end
    let path = [];
    let smallest;
    //Build initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    //As long as there is a vertex to visit
    while (queue.values.length) {
      smallest = queue.dequeue().val;
      if (smallest === end) {
        //Done
        //Build path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //Find the neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //Find distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //Updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //Updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            //Enqueue in priority queue with new priority
            queue.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E"));
