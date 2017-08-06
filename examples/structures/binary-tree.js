const BinaryTree = require('../../index').BinaryTree;

let btree = new BinaryTree();

for (let i = 1; i <= 10; i++) {
  btree.add(i);
}

btree.remove(5);
btree.add(3);

console.log(btree.toString());
