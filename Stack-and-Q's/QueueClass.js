//queue without array methods 

class Queue{
    constructor(){
      this.queue = []
      this.length = 0;
    }
    enqueue(value){
      let array = new Array(this.queue.length+1)
      if(array.length > 1){
        for(let i = 0; i < this.queue.length; i++){
          array[i+1] = this.queue[i]
          this.length+1
        }
      }
      this.length++
      array[0] = value
      this.queue = array;
  
      return this.queue;
    }
    dequeue(){
      if(this.queue.length == 0) return null
      if(this.queue.length == 1) {
        this.queue = []
      }else {
      
        this.queue.length = this.queue.length -1
        this.length--
      }
        console.log('length', this.length)
        return this.queue
    }
  
  }
  
  Q = new Queue()
  Q.enqueue(10)
  Q.enqueue(12)
  Q.enqueue(13)
  Q.enqueue(14)
  Q.dequeue()