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

  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1].some((edge) => edge.node === v2))
      this.adjacencyList[v1].push({ node: v2, weight });
    if (!this.adjacencyList[v2].some((edge) => edge.node === v1))
      this.adjacencyList[v2].push({ node: v1, weight });
  }

  dijkstra(start, end) {
    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
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
    while (queue.values.length) {
      smallest = queue.dequeue().val;
      if (smallest === end) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            queue.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}
