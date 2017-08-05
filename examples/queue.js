const Queue = require('../index').Queue;

let queue = new Queue();

for (let i = 1; i <= 5; i++) {
  queue.add(i);
}

queue.remove();
queue.add(3);

queue.print();
