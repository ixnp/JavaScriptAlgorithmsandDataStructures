//print the next greatest item in the sequence
function greater(arr) {

    let i = 0
    let j = 0
    let pointer = arr[i]
    let current = arr[i]
    while(i !== arr.length){
  
      if (pointer < current){
        console.log( `${pointer} --> ${current}`)
        i++
        j = i
        pointer = arr[i]
        current = arr[j]
      
    } else if(j == arr.length){
       console.log( `${pointer} --> -1`)
        current = pointer
        i++
        j = i
        pointer = arr[i]
        current = arr[j]
  
      }
      else {
        j++
        current = arr[j]
      }
    }
  }
  
  greater([13,5,4,9,23])