const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  root() {
    if (Node.data){
      return Node;
    }
    return null
  }

  add(data) {
    if (Node.data === undefined) {
      Node.data = new Node(data).data;
      Node.left = new Node(data).left;
      Node.right = new Node(data).right;
    } else {
      let current = Node
      let prev = Node

      const fun = () => {
        if (data > current.data && current.right === null) {
          current.right = new Node(data)
        }
        if (data < current.data && current.left === null) {
          current.left = new Node(data)
        }

        if (data > current.data) {
          if (data < current.right){
            current = prev.right
            prev.right = new Node(data)
            prev.right.right = current
          }
          prev = current
          current = current.right
          fun()
        }

        if (data < current.data) {
          if (data > current.left){
            current = prev.left
            prev.left = new Node(data)
            prev.left.left = current
          }
          current = current.left
          prev = current
          fun()
        }
      }
      fun()
    }
  }

  has(data) {
    let current = new Node()

    while (current.data) {
      if (current.data === data) {
        return current
      }
      if (data > current.data) {
        if (current.right) {
          current = current.right
        }
        return false
      }
      if (data < current.data) {
        if (current.left) {
          current = current.left
        }
        return false
      }
    }
    return data === current.data
  }

  find(data) {
    let current = new Node()

    while (current.data) {
      if (current.data === data) {
        return current
      }
      if (data > current.data) {
        if (current.right) {
          current = current.right
        }
        return false
      }
      if (data < current.data) {
        if (current.left) {
          current = current.left
        }
        return false
      }
    }
    return data === current.data ? current : null
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(54);
// tree.add(2);
// tree.add(6);
// tree.add(8);
// tree.add(31);
// tree.add(1);
// console.log(tree.has(54))

module.exports = {
  BinarySearchTree
};
