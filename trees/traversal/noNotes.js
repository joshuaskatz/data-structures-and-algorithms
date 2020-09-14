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

  postOrder() {
    let data = [];
    function postOrderHelper(node) {
      if (node.left) postOrderHelper(node.left);
      if (node.right) postOrderHelper(node.right);
      data.push(node.val);
    }
    postOrderHelper(this.root);
    return data;
  }

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
