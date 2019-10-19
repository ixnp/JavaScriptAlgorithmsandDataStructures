//find all substrings between two strings
function twoString(strOne,strTwo){
    let longStr
    let counter = 0
    if(strOne > strTwo){
       currentStr = strOne
       otherStr = strTwo
    }else{
       currentStr = strTwo
       otherStr = strOne
    }
    
    let map = {}
    let substring = {}
    while(counter < 2){
      for(let i = 0; i < currentStr.length; i++){
      
        for(let j = i; j < currentStr.length+1; j++){
          let temp = currentStr.slice(i,j)
          if(counter == 0){
              map[temp] = temp
             console.log(temp)
          }else {
            if(map[temp]){
              if(!substring[temp]){
                substring[temp] = temp
              }
              
              }
            }
          }
        }
        counter++
        currentStr = otherStr
      }   
    console.log("map", map)
    return Object.keys(substring)
  
  }
  twoString('hello', 'world')
  
  