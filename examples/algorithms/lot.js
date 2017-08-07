"use strict";

const LOT = require("../../index").LOT,
  BinaryTree = require("../../index").BinaryTree;

let btree = new BinaryTree();

for (let i = 1; i <= 10; i++) {
  btree.add(i);
}

console.log("Showing BTREE with level order traversal (LOT) algorithm");
LOT.resolve(btree, (value) => {
  console.log(value);
});

