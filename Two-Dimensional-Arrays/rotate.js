//Rotate an N × N matrix 90 degrees clockwise
//will only work on squares 
function rotateArray(mx){

    let top = mx[0];
    let right = [];
    let bottom = mx[mx.length-1];
    let left = [];
    for(let i = 0; i < mx.length; i++){
      left.push(mx[i][0]);
      right.push(mx[i][mx.length-1])
    }
    
    let temp = top;
    let temp2 = right;
    right = top;
    temp = bottom;
    bottom = temp2;
    temp2 = left;
    left = temp;
    top = temp2;
    
    for(let i = 1; i < mx.length-1; i++){
      mx[i][0]= left[i];
      mx[i][mx.length-1] = right[i];
    }
    mx[0] = top.reverse();
    mx[mx.length-1] = bottom.reverse();
    console.log(mx)
    }
    
    test = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
    rotateArray(test)