//OneAway: There are 3 typoes of edits that can be performed on strings: insert, remove ore replac. 
//given two strings, write a function to check if they have been edited in one of these ways, once. Only once.

//check if exact match false 
//loop through both
//make a counter to track changes if there is more then one change false 

function oneAway(strA,strB){
  let counter = 0;
  let mapA = mapper(strA);
  let mapB = mapper(strB);

  console.log(mapA, mapB);

  if(strA === strB) return false;

  if(strA.length === strB.length){
 
    for(let char in strA){
      if(strA[char] !== strB[char]){
        counter ++;
      }

    }
  }
  if(strA.length !== strB.length){   
    if(Object.keys(mapA).length !== Object.keys(mapA).length ){
      counter++;
    }
    for(let char in mapA){
      if(mapA[char] !== mapB[char]){
        counter++;
      }
    }
  }
  console.log(counter);
  if(counter === 1){
    return true;
  }else {
    return false;
  }
  
}

function mapper(str){
   
  keyMap = {};
  for(let char of str){
    if(!keyMap[char]){
      keyMap[char] = 1;
    }else {
      keyMap[char]++;
    }
  }
  return keyMap;
}

// oneAway('pale', 'ple'); //true
//oneAway('pales', 'pale'); //true
// oneAway('pale', 'bale'); //true
// oneAway('pale','bake'); //false