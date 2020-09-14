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

  //Create a new node
  //Starting at the root:
  //Check if there is a root, if not the root now becomes that new node!
  //If there is a root, check if the value of the new node is greater than or less than the value of the root
  //If greater, check to see if there is a node to the right
  //  If not add the node as the right property
  //  If there is, move to that node and repeat these steps.
  //If it is less, check to see if there is a node to the left
  //  If not, add that node as the left property
  //  If there is, move to that node and repeat these steps
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

  //Starting at the root, check if there is one, if not - we're done searching!
  //If there is a root, check if the value is value we are looking for. If it is we're done.
  //If greater, check to see if there is a node to the right
  //  If not we're done searching
  //  If there is, move to that node and repeat these steps.
  //If it is less, check to see if there is a node to the left
  //  If not, we're done searching
  //  If there is, move to that node and repeat these steps
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
      //If no node exists, return null
      if (!node) return false;

      //Compare target and current node values
      //The base case:
      if (val === node.val) {
        //If the node is a leaf
        if (!node.left && !node.right) {
          return null;
        }
        //If there isn't a left child
        if (!node.left) {
          //Return the right child
          return node.right;
        }
        //If there isn't a right child
        if (!node.right) {
          //Return the left child
          return node.left;
        }
        //Assign the right child to variable temp
        let temp = node.right;
        //While there is a left child
        while (!temp.left) {
          //Assign temp to be that left child
          temp = temp.left;
        }
        //At this point temp should be the leftmost leaf of the right child of the node we are trying to delete.
        //Replace node val with temp val
        node.val = temp.val;
        //Delete the leaf
        node.right = removeNode(node.right, temp.val);
        //Return the node
        return node;
      } else if (val < node.val) {
        //If the target value is less than the current node value
        //Search and remove target in left subtree
        node.left = removeHelper(node.left, val);
        //Return updated node after removal
        return node;
      } else if (val > node.val) {
        //If the target value is greater than the current node value
        //Search and remove target in the right subtree
        node.right = removeHelper(node.right, val);
        //Return updated node after removal
        return node;
      }
    }

    this.root = removeHelper(this.root, val);
  }

  //Finding the leftmost node using a while loop
  //Return the value once there are no more left children
  min() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  //Finding the rightmost node using a while loop
  //Return the value once there are no more right children
  max() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current;
  }

  //Like find, but returns true or false.
  contains(val) {
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
    return found;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(5);
tree.insert(12);
tree.insert(17);

console.log(tree.remove(10));
console.log(tree);
