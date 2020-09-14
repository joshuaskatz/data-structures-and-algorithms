//piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  //Should accept a value
  //Create new node using the value passed to the function
  //If there is no head prop on the list, set the head and tail to be the newly created node.
  //Otherwise set the next property on the tail to the new node and set the tail prop on the list to be the newly created node.
  //Return the list
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  //If there are no nodes in the list, return undefined
  //Loop through the list until you reach the tail
  //Set the next prop of the second to last node to null
  //Set the tail to be the 2nd to last node
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //If there are no nodes, return undefined
  //Store the current head property in a variable
  //Set the head property to be the current head's next property
  //Return the removed node
  shift() {
    if (!this.head) return undefined;

    let removedNode = this.head;
    this.head = removedNode.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return removedNode;
  }

  //Function should accept a value
  //Create a new node using the value passed to the function
  //If there is no head property on the list, set the head and tail to be the newly created node
  //Otherwise set the newly created node's next property to be the current head property on this list
  //Set the head property on the list to be that newly created node.
  //Increment length of list by 1
  //Return the list
  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  //Function should accept an index
  //If the index is less than zero or greater than or equal to the length of the list, return null.
  //Loop through the list until you reach the index and return the node at that index
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let current = this.head;
    //Break out of loop once i = idx, and return current.
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current;
  }

  //Function should accept an idx and a value
  //Use your get function to find the specific node.
  //If the node is not found, return false
  //If the node is found, set the value of that node to be the value passed to the function and return true
  set(idx, val) {
    let node = this.get(idx);
    if (!node) return false;
    node.val = val;
    return true;
  }

  //If the index is less than zero or greater than the length, return false
  //If the index is the same as the length, push a new node to the end of the list
  //If the index is 0, unshift a new node to start of the list
  //Use get function and pass in the idx - 1, and set the next property on that node to be the new node.
  //Set the next property on the new node to be the previous next node
  //Increase the length
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    let node = new Node(val);
    let prevNode = this.get(idx - 1);
    node.next = prevNode.next;
    prevNode.next = node;
    this.length++;
    return true;
  }

  //If the index is less than zero or greater than the length, return false
  //If the index is the same as the length-1, pop
  //If the index is 0, shift
  //Otherwise, use get method and access at idx-1
  //Set the next property on that node to be the next of the next node
  //Decrement length and return the removed node value
  remove(idx) {
    if (idx < 0 || idx > this.length) return null;
    if (idx === 0) return this.shift();
    if (idx === this.length) return this.pop();

    let prevNode = this.get(idx - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  //Swap the head and tail
  //Create a variable called next, prev and, current (initialize it to start at head)
  //Loop through the list
  //Set next to be the next property on whatever current is
  //Set the next poperty on current to be whatever prev is
  //Set prev to be the value of the current variable
  //Set the current varaible to be the value of the next variable
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next = current.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(50);
list.push(60);
list.push(17);
list.push(70);
list.push(24);

console.log(list.reverse());
