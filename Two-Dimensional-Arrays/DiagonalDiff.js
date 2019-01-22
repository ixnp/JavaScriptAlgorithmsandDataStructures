function diagonalDifference(arr) {
  let left = 0;
  let right = 0;

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      if (row == col) {
        left += arr[row][col]
      }
      if (row == arr.length - col - 1) {
        right += arr[row][col];
      }
    }
    console.log(left, right);
  }

  return Math.abs(left - right)

}
// row|col|2ndIF|L|R
// 0  |0  |2    |11|''
// 0  |1  |1    |11|''
// 0  |2  |0    |11|4
// ------------------
// 1  |0  |2    |11|4
// 1  |1  |1    |16|9
// 1  |2  |0    |16|9
// ------------------
// 2  |0  |2    |16|19
// 2  |1  |1    |16|19
// 2  |2  |0    |4|19
// 4 - 19 = 15

let test = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];
diagonalDifference(test);

//first arr row second col
// starting at row[0] and row[0][row.length-1] Previouse 
//add row[1][2] and row[1][row.length-2] Current 
//i++ j-- 
//Prev + current 
//end prev - current
//for(row=0,col=1;arr.lenght,++)
//Left prev= row=0col=1
//Right prev = row=0col=arr.length-col
//left cur = row[col][col] 
//right cur =  row[col][arr.length-[col+1]]
