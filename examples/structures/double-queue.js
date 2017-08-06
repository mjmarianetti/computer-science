const DoubleQueue = require('../../index').DoubleQueue;

let queue = new DoubleQueue();

for (let i = 1; i <= 5; i++) {
  queue.addEnd(i);
}

queue.removeEnd();
queue.addEnd(3);

queue.print();



console.log("====================");

queue = new DoubleQueue();

for (let i = 1; i <= 5; i++) {
  queue.addEnd(i);
}

queue.removeStart();
queue.addEnd(3);

queue.print();


console.log("====================");

queue = new DoubleQueue();

for (let i = 1; i <= 5; i++) {
  queue.addEnd(i);
}

queue.removeStart();
queue.addStart(3);

queue.print();
