class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//A stack must be constant time O(1)!!
//So to avoid having to iterate over the whole list, we use unshift/shift functionality and add/remove from the beginning, but call the methods push/pop.
class Stack {
  constructor() {
    //size, first, and last are typically used instead of length, head, and tail respectively for stacks.
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  push(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = this.first;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.first) return null;
    let removedNode = this.first;
    if (this.size === 1) {
      this.last === null;
    }
    this.first = this.first.next;
    removedNode.next = null;
    this.size--;
    return removedNode;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop());
console.log(stack);
