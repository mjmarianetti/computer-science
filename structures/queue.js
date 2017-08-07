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
    return this
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

module.exports = Queue;
