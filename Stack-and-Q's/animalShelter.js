// An animal shelter holds only dogs and cats, and operates on a strictly "first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog and dequeueCat.
function shelter(animals, animalRequested){
    let catQueue = []
    let dogQueue = []
  
    for(let i = 0; i < animals.length; i++){
      if(animals[i].type == 'cat'){
        catQueue.unshift(animals[i])
      } else {
        dogQueue.unshift(animals[i])
      }
    }
  
    if(animalRequested == 'cat'){
      animalRequested = catQueue[catQueue.length-1]
      catQueue.pop()
    }else {
      animalRequested = dogQueue[dogQueue.length-1]
      dogQueue.pop()
    }
    console.log(catQueue);
    console.log(dogQueue)
    return animalRequested
  }
  
  shelter([{type:'cat',name:'rose',age:6},{type:'dog',name:'puppy',age:17},{type:'cat',name:'bandet',age:2}],'cat')