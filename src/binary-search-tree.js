// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
constructor() {
  this.tree = null
}

  root() {
    return this.tree
  }

  add(data) {
    this.tree = fun(this.tree, data)

    function fun (node, data) {
      if (!node) {
        return new Node(data)
      }
      if (data === node.data) {
        return node
      }
      if (data > node.data ) {
        node.right = fun(node.right, data)
      }
      if (data < node.data ) {
        node.left = fun(node.left, data)
      }
      return node
    }
  }

  has(data) {
    return funSearch(this.tree, data)

    function funSearch (node, data) {
      if (!node) {
        return false
      }
      if (data === node.data) {
        return true
      }
      return (data > node.data )
          ? funSearch(node.right, data)
          : funSearch(node.left, data)
    }
  }

  find(data) {
    return funSearch(this.tree, data)

    function funSearch (node, data) {
      if (!node) {
        return null
      }
      if (data === node.data) {
        return node
      }
      return (data > node.data )
          ? funSearch(node.right, data)
          : funSearch(node.left, data)
    }
  }

  remove(data)  {
    this.tree = funRemove(this.tree, data)
    function funRemove (node, data) {
      if (!node) {
        return null
      }
      if (data < node.data ) {
        node.left = funRemove(node.left, data)
        return node
      } else if (data > node.data ) {
        node.right = funRemove(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.right) {
          node = node.left
          return node
        }
        if (!node.left) {
          node = node.right
          return node
        }

        let minRight = node.right
        while (minRight.left) {
          minRight = minRight.left
        }
        node.data = minRight.data

        node.right = funRemove(node.right, minRight.data)

        return node
      }
    }
  }

  min() {
    let current = this.tree

    while (current.left) {
      current = current.left
    }
    return current.data
  }

  max() {
    let current = this.tree

    while (current.right) {
      current = current.right
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};
