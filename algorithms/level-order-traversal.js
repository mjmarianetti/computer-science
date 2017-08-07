"use strict";

const Queue = require("../structures/queue");

class LOT {

  constructor() {}

  static resolve(btree, callback) {

    let queue = new Queue();

    let rootNode = btree.getRoot();

    queue.add(rootNode);

    let node = queue.remove();
    while (node) {
      callback(node.value);
      LOT._addNodes(queue, node);
      node = queue.remove();
    }

  }

  static _addNodes(queue, node) {

    if (node.left) {
      queue.add(node.left);
    }

    if (node.right) {
      queue.add(node.right);
    }
  }

}

module.exports = LOT;
