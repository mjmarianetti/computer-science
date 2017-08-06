'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

chai.use(chaiAsPromised);
const expect = chai.expect;

const BinaryTree = require('../../structures/binary-tree');

describe('BinaryTree', () => {

  it('should instantiate a BinaryTree', () => {

    let btree = new BinaryTree();
    expect(btree).to.be.not.undefined;
  });

  describe('methods', () => {

    let btree;

    beforeEach(() => {
      btree = new BinaryTree();
    });

    it('should add item to a btree', () => {

      btree.add(1);

      expect(btree.size())
        .to
        .be
        .eql(1);

    });

    it('should remove item from btree', () => {

      btree.add(1);
      btree.add(2);
      btree.add(3);

      expect(btree.size())
        .to
        .be
        .eql(3);

      btree.remove(2);

      expect(btree.size())
        .to
        .be
        .eql(2);

    });

    it('should check if tree contains item', () => {

      btree.add(1);
      btree.add(2);
      btree.add(3);

      expect(btree.contains(2))
        .to
        .be
        .eql(true);

        expect(btree.contains(5))
        .to
        .be
        .eql(false);

    });

  });

});
