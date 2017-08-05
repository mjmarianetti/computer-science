const Queue = require('./queue-interface');

class QueueLIFO extends Queue {

  constructor() {
    super();
    this.elements = [];
  }

  add(element) {
    this.elements.push(element);
  }


  remove() {
    this.elements.pop();
  }

}

module.exports = QueueLIFO;
