//Doubly Linked List
//costs more memory but has more flexibility 

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++
    return this;
  }
  pop() {
    if (!this.head) return undefined;

    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;

    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head === null;
      this.tail === null;

    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;

    }
    length--
    return oldHead;
  }
  unShift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    length++
    return this;
  }
  getItem(index) {
    if (index < 0 || index >= this.length) return null;
    let mid = Math.floor(this.length / 2);
    if (index < mid) {
      let count = 0;
      var current = this.head;
      while (count != index) {
        current = current.next;
        count++
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      console.log(current)
      while (count !== index) {
        current = current.prev;
        count--
      }
      return current;
    }
  }
  setItem(val, idx) {
    let node = this.getItem(idx);
    node.val = val;
    return node;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    let newNode = new Node(val);
    let beforeNode = this.getItem(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(idx) {
    console.log('yo')
    if (idx < 0 || idx >= this.length) return false;
    console.log('yo')
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let removedNode = this.getItem(idx);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    console.log('yo')
    return removedNode;
  }
}

list = new DoublyLinkedList()
list.push(10);
list.push(20);
list.push(30)
list.push(40)
list.remove(1);
list


//Big O 
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
  //Technically searching is O(n/2), but that rounds to O(n)
// Access - O(n)