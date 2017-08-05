class Queue {

  constructor() {}

  add(element) {}
  remove(element) {}
  print() {
    this
      .elements
      .forEach((element) => {
        console.log(element);
      });
  }

}

module.exports = Queue;
