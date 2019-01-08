// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.


//Create stack class
//Create Queue class with constuctor with two stacks
//Queue is first in first out
//Stacks last in last out
//add would just be push
//remove
    //Move items from stack A to stack B until A is empty
    //pop top of stack B 
//zPeek same as above but return instead of pop

class Stack{
  constructor(){
    this.data = [];
  }
  push(item){
    this.data.push(item);
  }
  pop(){
    return this.data.pop();
  }
  peek(){
       return this.data[this.data.length - 1];
  }
}

class Queue{
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

 add(item){
   this.stackA.push(item);
 } 
 remove(){
   if(this.stackA.length === 0){
     return this.stackA.pop();
   }

   while(this.stackA.peek()){
     this.stackB.push(this.stackA.pop());
   }

   return this.stackB.pop();

   while(this.stackB.peek()){
     this.stackA.push(this.stackB.pop());
   }
 }
peekQ(){
  if(this.stackA.length === 0){
    return this.stackA.peek();
    }

  while(this.stackA.peek()){
    this.stackB.push(this.stackA.pop());
    }
  
  return this.stackB.peek();
  
  while(this.stackB.peek()){
     this.stackA.push(this.stackB.pop());
    }
  }
}

    const q = new Queue();
    q.add(1);
    q.add(2);
    q.add(3);

  console.log('q', q.stackA) // returns Stack { data: [ 1, 2, 3 ] }
  console.log(q.peekQ());  // returns 1
  console.log(q.remove()); // returns 1
  console.log(q.peekQ());  // returns 2
  console.log(q.remove()); // returns 2

   const q2 = new Queue();
    q2.add('a');
   
  console.log(q2.remove()); // returns a