//given a target and a arr, find all possible 
//combos in the array that == the targ
function allThatSum(arr,targ){
    let sum = 0
    let subArr = []
    let result = {}
  
   _allThatSum(0,0,arr)
    return Object.keys(result)
  
  function _allThatSum(start,current){
  if(start == arr.length-1)return
  
        subArr.push(arr[current])
        
      sum = subArr.reduce((a,b)=> a+b, 0)
   
      if(sum > targ){
        subArr = []
        arr.splice(current-1,1)
       
        _allThatSum(start,0)
      
      } else if(sum == targ){
        result[subArr]= true
        subArr = []
        arr.splice(current-1,1)
     
     _allThatSum(start,0)
      } else if(current === arr.length-1){
        start++
         _allThatSum(start,start,arr)
      } else {
     
        current++
    
        _allThatSum(start,current)
      }
  
    }
  }
  
  allThatSum([1,2,5,6,8,],9)