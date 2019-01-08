// Design a parking lot using object-oriented principles.
// For our purposes right now, we’ll make the following assumptions. We made these specific assumptions to add a bit of complexity to the problem without adding too much. If you made different assumptions, that’s totally fine.
// 1) The parking lot has multiple levels. Each level has multiple rows of spots.
// 2) The parking lot can park motorcycles, cars, and buses.
// 3) The parking lot has motorcycle spots, compact spots, and large spots.
// 4) A motorcycle can park in any spot.
// 5) A car can park in either a single compact spot or a single large spot.
// 6) A bus can park in five large spots that are consecutive and within the same row. It cannot park in small spots.

//in 3 kinds of 'cars'
//if bus subtrackt 5 from total of large spots
//if car subtract from total of large and compact spots
//if motorcycle subtract fromtotall of all spots 
//in lot size

// 50% large 40% compact 10% motorcycle


function parking(lot, carArr){

  let largeSpots = Math.floor(lot * .50);
  let medSpots = Math.floor(lot * .40)
  let smallSpots = Math.floor(lot * .10)
  let total = carArr.reduce(function(carArr,b){return carArr+b}, 0)
  
  
  if(total > lot) return false;
  if(largeSpots < (carArr[0]*5)) return false;
  let largeStillFree = largeSpots - (carArr[0] * 5);
  
  
  if((medSpots + largeStillFree) < carArr[1]) return false;
  let medStillFree = medSpots - (largeStillFree + medSpots);
  
  if((medStillFree + smallSpots) >= carArr[2]) return false;
  
  return true;
  }
  
  
  // parking(100,[1,10,100]);  false
  // parking(100,[1,10,10]);   true