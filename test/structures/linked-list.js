'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

chai.use(chaiAsPromised);
const expect = chai.expect;

const LinkedList = require('../../structures/linked-list');

describe('LinkedList', () => {

    it('should instantiate a LinkedList', () => {

        let list = new LinkedList();
        expect(list).to.be.not.undefined;
        expect(list.firstElement)
            .to
            .be
            .eql(undefined);
    });

    describe('methods', () => {

        let list;

        beforeEach(() => {
            list = new LinkedList();

            for (let i = 1; i <= 10; i++) {
                list.add(i);
            }
        });

        it('should add item to a list', () => {
            expect(list.firstElement.data)
                .to
                .be
                .eql(1);
            expect(list.lastElement.data)
                .to
                .be
                .eql(10);
        });

        it('should delete item from a list', () => {
            list.deleteNode(10);
            list.deleteNode(5);
            expect(list.nodeCount())
                .to
                .be
                .eql(8);

        });

    });

});
