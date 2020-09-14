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

  //Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
  enqueue(val, priority) {
    //Create node
    let node = new Node(val, priority);
    //Push node to the end of this.values
    this.values.push(node);
    //Initialize idx and enter the loop for as long as idx > 0
    let idx = this.values.length - 1;
    while (idx > 0) {
      //Initialize parentIdx
      let parentIdx = Math.floor((idx - 1) / 2);
      //If the priority of the parent is greater (less important), than the child, then swap the two
      if (this.values[parentIdx].priority > this.values[idx].priority) {
        let temp = this.values[parentIdx];
        this.values[parentIdx] = this.values[idx];
        this.values[idx] = temp;
        //Update the idx to the parent idx, and because the idx was updated we must re-evaluate/find the new parentIdx
        idx = parentIdx;
        parentIdx = Math.floor((idx - 1) / 2);
        //Else break out of the loop
      } else break;
    }
    //Return values
    return this.values;
  }

  //Dequeue method removes root element, returns it, and rearranges heap useing priority.
  dequeue() {
    //Initialize the min (root)
    const min = this.values[0];
    const end = this.values.pop();
    //Set the root to the popped value
    this.values[0] = end;

    //Initialize index at 0, node, length
    let index = 0;
    const length = this.values.length;
    const node = this.values[0];
    //Enter the loop
    while (true) {
      //Initialize the indicies and at the beginning of each loop swap will be set to null (swap has yet to occur).
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      //To avoid the edgecase that either child index is greater than the length
      if (leftChildIndex < length) {
        //leftChild, initialize above, is set to this.values at the leftChildIndex
        leftChild = this.values[leftChildIndex];
        //If the priority of the left child is less than the node priority, swap
        if (leftChild.priority < node.priority) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        //rightChild, initialize above, is set to this.values at the rightChildIndex
        rightChild = this.values[rightChildIndex];
        //If the priority of the left child is less than the node priority and the swap hasn't occured OR if the priority of the right child is less than the priority of the left child and the swap has occured, swap
        if (
          (!swap && rightChild.priority < node.priority) ||
          (swap && rightChild.priority < leftChild.priority)
        )
          swap = rightChildIndex;
      }
      //If no swap occured, exit the loop
      if (!swap) break;
      //Swap the index with the swap index
      this.values[index] = this.values[swap];
      //The value at swap index is the node.
      this.values[swap] = node;
      //Set index to swap
      index = swap;
    }

    return min;
  }
}

let pq = new PriorityQueue();
pq.enqueue("Register to vote", 1);
pq.enqueue("Solve world hunger", 0);
pq.enqueue("groceries", 2);
pq.enqueue("Apply to affordable housing committee", 0);
pq.enqueue("adslkfjalsd", 1);
pq.enqueue("adslfkalsdfj", 3);
console.log(pq.dequeue());

console.log(pq);
