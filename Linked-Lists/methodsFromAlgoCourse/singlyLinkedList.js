class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class singlyLinkedList {
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
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;

  }
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++

    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++

    }
    return this;
  }
  getItem(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++
    }
    return current;
  }
  setItem(val, idx) {
    let foundNode = this.getItem(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    //placing !! before the method will cause it to return true
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unShift(val);

    let newNode = new Node(val);
    let prev = this.getItem(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    //placing !! before the method will cause it to return true
    if (index === this.length) return !!this.pop();
    if (index === 0) return !!this.shift();
    let prev = this.getItem(index - 1)
    prev.next = prev.next.next;
    this.length--
    return true;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let i = 0;
    let next;
    let prev = null;
    while (i < this.length) {
      next = node.next
      node.next = prev;
      prev = node;
      node = next;
      i++
    }
  }
  print() {
    let current = this.head;
    while (current.next) {
      console.log('val', current.val, 'next', current.next);
      current = current.next;

    }
  }
};
var first = new Node('hi');
first.next = new Node('there');
first.next.next = new Node('how');
first.next.next.next = new Node('are');
first.next.next.next.next = new Node('you!')

var list = new singlyLinkedList()
list.push('I am fine!')
list.push('goodbye!')
list.push('bleh');
list.push('<3');
// test method here

list.print();
// Big O
//insertion O(1)
//Removal O(1) or O(n)
//Searching O(n)
//Access O(n)