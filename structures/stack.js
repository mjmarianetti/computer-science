class Stack {

  constructor() {
    this.elements = [];
  }

  add(element) {
    this
      .elements
      .unshift(element);
  }

  remove() {
    this
      .elements
      .pop();
  }
}

module.exports = Stack;
