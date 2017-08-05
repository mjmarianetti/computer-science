'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

chai.use(chaiAsPromised);
const expect = chai.expect;

const DoubleQueue = require('../../structures/double-queue');

describe('DoubleQueue', () => {

  it('should instantiate a DoubleQueue', () => {

    let queue = new DoubleQueue();
    expect(queue).to.be.not.undefined;
    expect(queue.elements)
      .to
      .be
      .eql([]);
  });

  describe('methods', () => {

    let queue;

    beforeEach(() => {
      queue = new DoubleQueue();
    });

    it('should add item to a queue', () => {
      queue.addStart(1);
      expect(queue.elements)
        .to
        .be
        .eql([1]);

    });

    it('should add items to a queue', () => {
      queue.addStart(1);
      queue.addStart(2);
      queue.addEnd(3);
      queue.addStart(4);

      expect(queue.elements)
        .to
        .be
        .eql([4,2,1,3]);

    });

    it('should remove items from a queue', () => {
      queue.addEnd(1);
      queue.addEnd(2);
      queue.removeStart();
      queue.addEnd(4);

      expect(queue.elements)
        .to
        .be
        .eql([2,4]);

    });

    it('should remove items from a queue', () => {
      queue.addEnd(1);
      queue.addEnd(2);
      queue.addEnd(3);
      queue.addEnd(4);

      queue.removeStart();
      queue.removeStart();
      queue.removeEnd();

      expect(queue.elements)
        .to
        .be
        .eql([3]);

    });


  });

});
