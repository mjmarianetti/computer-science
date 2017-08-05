'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

chai.use(chaiAsPromised);
const expect = chai.expect;

const DoubleLinkedList = require('../../structures/double-linked-list');

describe.only('DoubleLinkedList', () => {

    it('should instantiate a DoubleLinkedList', () => {

        let list = new DoubleLinkedList();
        expect(list).to.be.not.undefined;
        expect(list.firstElement)
            .to
            .be
            .eql(undefined);
    });

    describe('methods', () => {

        let list;

        beforeEach(() => {
            list = new DoubleLinkedList();

            for (let i = 1; i <= 10; i++) {
                list.add(i);
            }
        });

        it('should add item to a list', () => {
            expect(list.firstElement.data)
                .to
                .be
                .eql(1);
             expect(list.firstElement.next.data)
                .to
                .be
                .eql(2);
             expect(list.firstElement.next.previous.data)
                .to
                .be
                .eql(1);
        });

        it('should delete item from a list', () => {
            list.deleteNode(2);
            expect(list.firstElement.data)
                .to
                .be
                .eql(1);
             expect(list.firstElement.next.data)
                .to
                .be
                .eql(3);
             expect(list.firstElement.next.previous.data)
                .to
                .be
                .eql(1);
        });

    });

});
