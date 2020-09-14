class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Create a new node with the value passed to the function
  //If the head property is null, set the head and tail to be the newly created node
  //If not, set the next property on the tail to be that node
  //Set the previous property on the newly created node to be the tail
  //Set the tail to be the newly created node
  //Increment the list and return the list
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  //If there is no head, return undefined
  //Store the current tail in a varaible to return later
  //If the length is 1, set the head and tail to be null
  //Update the tail to be the previous node
  //Set the newTails next to null
  //Decrement the length and return the value removed
  pop() {
    if (!this.head) return null;
    let removedTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.tail = removedTail.prev;
      this.tail.next = null;
      removedTail.prev = null;
    }
    this.length--;
    return removedTail;
  }

  //If there is no head, return undefined
  //Store the current head in a varaible to return later
  //If the length is 1, set the head and tail to be null
  //Update the head to be the next node of previous head
  //Set the newHeads prev to null
  //Set the prevHeads next to null
  //Decrement the length and return the value removed
  shift() {
    if (!this.head) return null;
    let removedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.head = removedHead.next;
      removedHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return removedHead;
  }

  //Create a new node with the value passed to the function
  //If the head property is null, set the head and tail to be the newly created node
  //If not, set the prev property on the head to be that node
  //Set the next property on the newly created node to be the head
  //Set the head to be the newly created node
  //Increment the list and return the list
  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  //If the index is less than 0 or greater or equal to the length return null
  //Check if the idx is half the length of the list.
  //If it is loop forward from the beggining.
  //If not, loop backwards from the end.
  //Return node when found
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let middle = this.length / 2;
    let current, count;
    if (idx <= middle) {
      count = 0;
      current = this.head;
      while (count != idx) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count != idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  //Use get method to get a node
  //If the node at that index doesn't exist, return false
  //Else, update the value of the node, and return true
  set(idx, val) {
    let node = this.get(idx);
    if (node != null) {
      node.val = val;
      return true;
    }
    return false;
  }

  //If the index is less than zero or greater than or equal to the length return false
  //If the index is 0, use unshift
  //If the index is the same as the length, use push
  //Else use the get method to access the idx -1
  //Set the next and prev props on the correct nodes to link everything together
  //Increment the length and return true
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let prevNode = this.get(idx - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  //If the index is less than zero or greater than or equal to the length return false
  //If the index is 0, use shift
  //If the index is the same as the length - 1, use pop
  //Else use the get method to access the idx
  //Set the next and prev props on the correct nodes to link everything together
  //Decrement the length and return true
  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let removedNode = this.get(idx);
    removedNode.next.prev = removedNode.prev;
    removedNode.prev.next = removedNode.next;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

let list = new DoublyLinkedList();
list.push(12);
list.push(15);
list.push(1);
list.push(17);
list.push(11);

console.log(list.remove(2));
console.log(list.get(1));
