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

  print() {
    this
      .elements
      .forEach((element) => {
        console.log(element);
      });
  }

}

module.exports = Stack;
