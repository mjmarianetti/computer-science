const Queue = require('./queue-interface');

class QueueFIFO extends Queue {

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

module.exports = QueueFIFO;
