class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Add to the end of the list and remove from the beginning so we meet the 0(1) time complexity requirements of queues
class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  enqueue(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = this.first;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (!this.first) return null;
    let removedNode = this.first;
    if (this.length === 1) this.last = null;
    this.first = this.first.next;
    removedNode.next = null;
    this.size--;
    return removedNode;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue);
