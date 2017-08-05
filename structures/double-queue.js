class DoubleQueue {

  constructor() {
    this.elements = [];
  }

  addStart(element) {
    this
      .elements
      .unshift(element);
  }

  addEnd(element) {
    this
      .elements
      .push(element);
  }

  removeStart() {
    this
      .elements
      .shift();
  }

  removeEnd() {
    this
      .elements
      .pop();
  }

}

module.exports = DoubleQueue;
