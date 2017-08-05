'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

chai.use(chaiAsPromised);
const expect = chai.expect;

const Stack = require('../../structures/stack');

describe('Stack', () => {

  it('should instantiate a stack', () => {

    let stack = new Stack();
    expect(stack).to.be.not.undefined;
    expect(stack.elements)
      .to
      .be
      .eql([]);
  });

  describe('methods', () => {

    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    it('should add item to a stack', () => {
      stack.add(1);
      expect(stack.elements)
        .to
        .be
        .eql([1]);

    });

    it('should add items to a stack', () => {
      stack.add(1);
      stack.add(2);
      stack.add(3);
      stack.add(4);

      expect(stack.elements)
        .to
        .be
        .eql([4, 3, 2, 1]);

    });

    it('should remove items from a stack', () => {
      stack.add(1);
      stack.add(2);
      stack.remove();
      stack.add(4);

      expect(stack.elements)
        .to
        .be
        .eql([4, 2]);

    });

    it('should remove items from a stack', () => {
      stack.add(1);
      stack.add(2);
      stack.add(3);
      stack.add(4);

      stack.remove();
      stack.remove();
      stack.remove();
      stack.remove();

      expect(stack.elements)
        .to
        .be
        .eql([]);

    });

    it('should remove items from a stack', () => {
      stack.add(1);
      stack.add(2);
      stack.add(3);
      stack.add(4);

      stack.remove();
      stack.remove();

      expect(stack.elements)
        .to
        .be
        .eql([4, 3]);

    });
  });

});
