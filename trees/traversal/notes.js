class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else if (val === current.val) {
        return null;
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val === current.val) found = true;
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      }
    }
    if (!found) return false;
    return current;
  }
  //Create a queue (this can be an array) and a variable to store the values of the nodes visited.
  //Place the root node in the queue
  //Loop as long as there is anything the queue:
  //     - Deque a node from the queue and push the value of the node
  //       into the variable that stores the nodes
  //     - If there is a left property on the node dequeued - add it to the
  //       queue
  //     - If there is a right property on the node dequeued - add it to the
  //       queue
  //Return the variable that stores the values.
  bfs() {
    let data = [],
      queue = [],
      node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  //Create a variable to store the values of the nodes visited
  //Write a helper function which accepts a node
  //Push the value of the node to the variable that stores the values
  //If the node has a left property, call the helper function with the left property on the node
  //If the node has a right property, call the helper function with the right property on the node
  //Invoke the helper function with this.root and return data array
  preOrder() {
    let data = [];
    function preOrderHelper(node) {
      data.push(node.val);
      if (node.left) preOrderHelper(node.left);
      if (node.right) preOrderHelper(node.right);
    }
    preOrderHelper(this.root);
    return data;
  }

  //Create a variable to store the values of the nodes visited
  //Write a helper function which accepts a node
  //If the node has a left property, call the helper function with the left property on the node
  //If the node has a right property, call the helper function with the right property on the node
  //Push the value of the node to the variable that stores the values
  //Invoke the helper function with this.root and return data array
  postOrder() {
    let data = [];
    function postOrderHelper(node) {
      if (node.left) postOrderHelper(node.left);
      if (node.right) postOrderHelper(node.right);
      //We order AFTER the tree has been traversed - hence "post".
      data.push(node.val);
    }
    postOrderHelper(this.root);
    return data;
  }

  //Create a variable to store the values of the nodes visited
  //Write a helper function which accepts a node
  //If the node has a left property, call the helper function with the left property on the node
  //Push the value of the node to the variable that stores the values
  //If the node has a right property, call the helper function with the right property on the node
  //Invoke the helper function with this.root and return data array
  inOrder() {
    let data = [];
    function inOrderHelper(node) {
      if (node.left) inOrderHelper(node.left);
      data.push(node.val);
      if (node.right) inOrderHelper(node.right);
    }
    inOrderHelper(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(15);
tree.insert(8);
tree.insert(20);

console.log("Preorder:", tree.preOrder());
console.log("Postorder: ", tree.postOrder());
console.log("Inorder: ", tree.inOrder());
