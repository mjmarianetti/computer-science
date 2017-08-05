const Queue = require('./queue-interface');

class Stack extends Queue {

  constructor() {
    super();
    this.elements = [];
  }

  add(element) {
    this.elements.unshift(element);
  }


  remove() {
    this.elements.pop();
  }
}

module.exports = Stack;
