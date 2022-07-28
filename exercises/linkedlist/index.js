// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // this.head will be inserted
    // at the beginning of the list
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;

    while (node) {
      if (!node.next) return node;

      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    let node = this.head;

    if (!node) {
      return;
    }

    this.head = node.next;
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previousNode = this.head;
    let nextNode = this.head.next;

    while (nextNode.next) {
      previousNode = nextNode;
      nextNode = nextNode.next;
    }

    previousNode.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(idx) {
    if (!this.head) return this.head;

    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === idx) return node;

      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(idx) {
    if (!this.head) return this.head;

    let counter = 0;

    if (idx === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(-1);

    if (!previous || !previous.next) return;

    previous.next = previous.next.next;
  }

  insertAt(idx, data) {
    if (!this.head) return this.head;

    if (idx === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(idx - 1) || this.getLast();
    const node = new Node(data, previous.next);

    previous.next = node;
  }
}

module.exports = { Node, LinkedList };
