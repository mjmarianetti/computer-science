'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

chai.use(chaiAsPromised);
const expect = chai.expect;

const Queue = require('../../structures/queue-fifo');

describe('QueueFIFO', () => {

  it('should instantiate a lifo queue', () => {

    let queue = new Queue();
    expect(queue).to.be.not.undefined;
    expect(queue.elements)
      .to
      .be
      .eql([]);
  });

  describe('methods', () => {

    let queue;

    beforeEach(() => {
      queue = new Queue();
    });

    it('should add item to a queue', () => {
      queue.add(1);
      expect(queue.elements)
        .to
        .be
        .eql([1]);

    });

    it('should add items to a queue', () => {
      queue.add(1);
      queue.add(2);
      queue.add(3);
      queue.add(4);

      expect(queue.elements)
        .to
        .be
        .eql([4,3,2,1]);

    });

    it('should remove items from a queue', () => {
      queue.add(1);
      queue.add(2);
      queue.remove();
      queue.add(4);

      expect(queue.elements)
        .to
        .be
        .eql([4,2]);

    });

    it('should remove items from a queue', () => {
      queue.add(1);
      queue.add(2);
      queue.add(3);
      queue.add(4);

      queue.remove();
      queue.remove();
      queue.remove();
      queue.remove();

      expect(queue.elements)
        .to
        .be
        .eql([]);

    });

    it('should remove items from a queue', () => {
      queue.add(1);
      queue.add(2);
      queue.add(3);
      queue.add(4);

      queue.remove();
      queue.remove();

      expect(queue.elements)
        .to
        .be
        .eql([4,3]);

    });
  });

});
