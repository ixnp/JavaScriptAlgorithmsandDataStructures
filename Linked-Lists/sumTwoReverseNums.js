//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

//You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//Output: 7 -> 0 -> 8
//Explanation: 342 + 465 = 807


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  add(val) {

    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++
    return this
  }
  print() {
    let current = this.head;
    while (current.next) {
      console.log('val', current.val, 'next', current.next);
      current = current.next;

    }
  }
}

let list1 = new SinglyLinkedList();
list1.add(2);
list1.add(4);
list1.add(3);
list1.print();

let list2 = new SinglyLinkedList();
list2.add(5);
list2.add(6);
list2.add(4);
list2.print();

function reverseOrderSum(l1, l2) {
  let num1 = buildNum(l1);
  let num2 = buildNum(l2);
  let newList = new SinglyLinkedList();
  let sum = num1 + num2
  let digitCount = digitalCount(sum);

  for (let i = 0; i < digitCount; i++) {
    let dig = getDigit(sum, i);
    newList.add(dig);
  }
  return newList.print();
}
function getDigit(num, i) {

  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitalCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function buildNum(list) {
  let map = [];
  let current = list.head;
  while (current) {
    map.unshift(current.val);
    current = current.next;
  }
  let numstr = map.join('')
  let num = parseInt(numstr)
  return num;
}
reverseOrderSum(list1, list2);