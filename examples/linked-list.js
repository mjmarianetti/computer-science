const LinkedList = require('../index').LinkedList;

let list = new LinkedList();

for (let i = 1; i <= 5; i++) {
  list.add(i);
}

list.deleteNode(3);
list.add(3);

list.print();
