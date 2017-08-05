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

  print() {
    this
      .elements
      .forEach((element) => {
        console.log(element);
      });
  }

}

module.exports = DoubleQueue;
