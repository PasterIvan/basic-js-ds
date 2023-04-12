const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  getUnderlyingList() {
    if (this.value) {
      return this.value
    }
  }

  enqueue(value) {
    this.value = fun(this.value, value)

    function fun (node, value) {
      if (!node) {
        return new ListNode(value)
      } else {
        node.next = fun(node.next, value)
      }
      return node
    }
  }

  dequeue() {
    let current = this.value
    this.value = current.next
    return current.value
  }
}
const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.getUnderlyingList())

module.exports = {
  Queue
};
