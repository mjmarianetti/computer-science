const Stack = require('../../index').Stack;

let stack = new Stack();

for (let i = 1; i <= 5; i++) {
  stack.add(i);
}

stack.remove();
stack.add(3);

stack.print();
