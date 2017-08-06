class ListNode {

  constructor(data) {
    this.data = data;
  }
}

class LinkedList {

  constructor() {
    this.firstElement = undefined;
    this.lastElement = undefined;
  }

  add(element) {

    let node = new ListNode(element);

    if (!this.firstElement) {
      this._addFirstElementOfList(node);
    } else {
      this._addToEnd(node);
    }
  }

  _addFirstElementOfList(node) {
    this.firstElement = node;
    this.lastElement = node;
  }

  _addToEnd(node) {
    this.lastElement.next = node;
    this.lastElement = node;
  }

  nodeCount() {
    let tempElement = this.firstElement,
      count = 0;
    while (tempElement) {
      count++;
      tempElement = tempElement.next;
    }
    return count;
  }

  addFirst(element) {
    let node = new ListNode(element);

    if (!this.firstElement) {
      this._addFirstElementOfList(node);
    } else {
      let temp = this.firstElement;
      this.firstElement = node;
      this.firstElement.next = temp;
    }
  }

  _findElement(element) {
    let found,
      tempElement = this.firstElement;
    while (tempElement.next) {

      if (tempElement.data === element) {
        found = tempElement;
        break;
      } else {
        tempElement = tempElement.next;

      }
    }
    return found;
  }

  searchNodeAt(position) {
    let currentPos = 0,
      tempElement = this.firstElement;

    while (currentPos < position) {
      tempElement = tempElement.next;
      currentPos++;
    }
    return tempElement;
  }

  deleteNode(element) {
    let found,
      tempElement = this.firstElement;
    while (tempElement.next) {

      if (tempElement.next.data === element) {
        found = tempElement;
        break;
      } else {
        tempElement = tempElement.next;
      }
    }

    let elementToDelete = found.next;

    if (elementToDelete.next) {
      found.next = elementToDelete.next;
    } else {
      found.next = null;
      this.lastElement = found;
    }

  }

  print() {
    let tempElement = this.firstElement;
    while (tempElement) {
      console.log("--------------------");
      console.log("NODE:" + tempElement.data);
      let next = (tempElement.next && tempElement.next.data)
        ? tempElement.next.data
        : null;
      console.log('-> next: ' + next);
      console.log("--------------------");
      tempElement = tempElement.next;
    }
  }

}

module.exports = LinkedList;
