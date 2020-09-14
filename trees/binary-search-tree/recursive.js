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

  insertHelper(newNode, node) {
    if (newNode.val === node.val) return null;
    if (newNode.val < node.val) {
      if (!node.left) {
        node.left = newNode;
        return this;
      }
      this.insertHelper(newNode, node.left);
    }
    if (newNode.val > node.val) {
      if (!node.right) {
        node.right = newNode;
        return this;
      }
      this.insertHelper(newNode, node.right);
    }
  }

  insert(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    this.insertHelper(node, this.root);
  }

  find(val, node = this.root) {
    if (!node) return false;
    if (val < node.val) return this.find(val, node.left);
    if (val > node.val) return this.find(val, node.right);
    else return node;
  }
}

let t = new BinarySearchTree();
t.insert(50);
t.insert(75);
t.insert(25);
t.insert(10);
t.insert(30);

console.log(t);
