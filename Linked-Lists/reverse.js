'use strict'
//Reverse a singly linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  };

  reverse() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current);
      current = current.next;
    }
    this.head = arr[arr.length - 1]
    this.tail = arr[0];
    current = this.head;
    console.log(this.head)
    for (let i = arr.length - 2; i > 0; i--) {
      let item = arr[i];
      current.next = item;
      current = current.next;
    }
    return this;
  }
}



let list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);

list.reverse();


