class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

//MinBinaryHeap - lower number means higher priority
class PriorityQueue {
  constructor() {
    this.values = [];
  }

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
