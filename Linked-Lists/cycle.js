// link list cycle 
//A linked list is said to contain a cycle if any node is visited more than once while traversing the list.

//Complete the function provided for you in your editor.
//It has one parameter: a pointer to a Node object named head that points to the head of a linked list.
//Your function must return a boolean denoting whether or not there is a cycle in the list.
//If there is a cycle, return true; otherwise, return false.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}
class List {
  constructor() {
    this.head = null;

    this.length = 0;
  }
  add(val) {
    let node = new Node(val);
    let current = this.head;
    if (this.length === 0) {
      this.head = node;

      this.length++



    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
      this.length++
    }

  }

  addCycle(k) {
    let counter = 0;
    let current = this.head;
    console.log(current)
    while (counter !== k - 1) {
      current = current.next;
      counter++

    }
    while (current.next) {
      current = current.next;

    }
    current.next = current;

    console.log(current)
  }
  isCycle() {
    let current = this.head;
    let counter = 0;
    while (current.visitied !== true) {
      if (current.next === null) return false;

      current.visitied = true;

      current = current.next;
      counter++
    }
    return true;
  }
}

list = new List();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(10);
list.addCycle(3);
list.isCycle()