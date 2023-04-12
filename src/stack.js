const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}


class Stack {
  push(element) {
    this.head = fun(this.head, element)

    function fun (node, element) {
      if (!node) {
        return new Node(element)
      } else {
        let newHead = new Node(element)
        newHead.next = node
        return newHead
      }
    }
  }

  pop() {
    let current = this.head
    this.head = current.next
    return current.value
  }

  peek() {
    if (this.head){
      return this.head.value
    }
    return null
  }
}

module.exports = {
  Stack
};
