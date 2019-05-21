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
    if(!this.head){
      return null
    }else {
      let temp = this.head
      this.head = this.head.next
      temp.next = null;
    }
    this.length--
    console.log(this.length)
    return this.head;
  }
}

let testStack = new Stack();
testStack.push(1)
testStack.push(2)
testStack.push(3)
testStack.push(4)
testStack.pop()

