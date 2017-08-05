class Queue {

  constructor() {
    this.elements = [];
  }

  add(element) {
    this
      .elements
      .push(element);
  }

  remove() {
    this
      .elements
      .pop();
  }

}

module.exports = Queue;
