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

  remove(val) {
    function removeHelper(node, val) {
      if (!node) return null;

      if (val == node.val) {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let temp = node.right;
        if (temp.left) {
          while (!temp.left) {
            temp = temp.left;
          }
        }
        node.val = temp.val;
        node.right = removeHelper(node.right, temp.val);
        return node;
      } else if (val < node.val) {
        node.left = removeHelper(node.left, val);
        return node;
      } else {
        node.right = removeHelper(node.right, val);
        return node;
      }
    }

    this.root = removeHelper(this.root, val);
    return this;
  }

  min() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  max() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(12);
tree.insert(11);
tree.insert(20);
tree.insert(30);
tree.insert(50);
tree.insert(1);

console.log(tree.min());
