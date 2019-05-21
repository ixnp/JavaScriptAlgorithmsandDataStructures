'use strict';
class StackNode {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.head = null;
    this.length = 0
  }
  push(data){
    let node = new StackNode(data)
    let current = this.head
    if(!this.head){
      this.head = node;
      this.length++
    }else{
      while(current.next){
        current = current.next;
      }
      current.next = node;
      this.length++
    }
      return this.head;
  }
  pop(){
    if(!this.head) return null;
    let current = this.head
    while(current.next.next){
      current = current.next
    }
    current.next = null;
    this.length--
    return this.head;
  }
}

let testStack = new Stack();
testStack.push(1)
testStack.push(2)
testStack.push(3)
testStack.push(4)
testStack.pop()

