
//www.hackerrank.com/challenges/2d-array/problem
https: function hourGlass(arr) {
  var max;

  for (let row = 0; row + 2 < arr.length; row++) {
    for (let col = 0; col + 2 < arr.length; col++) {
      let dex = [
        arr[row][col],
        arr[row][col + 1],
        arr[row][col + 2],
        arr[row + 1][col + 1],
        arr[row + 2][col],
        arr[row + 2][col + 1],
        arr[row + 2][col + 2]
      ];

      let glassSum = _hourGlass(dex);
      console.log(glassSum, max);
      if (max === undefined) {
        max = glassSum;
      } else if (glassSum > max) {
        max = glassSum;
      }
    }
  }
  return max;
}

function _hourGlass(arr) {
  // console.log(arr);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let total = arr.reduce(reducer)
  // console.log(total);
  return total;
}

let test = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]
let test2 =
  [[0, -4, -6, 0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6, 0, -8, -6, -7]]

hourGlass(test2);

// let test2 = [-1,2,3];
// _hourGlass(test2);
//identify hourglass
//starting at row[0],col[0]
//     row[j]col[i] > row[j]col[i + 1] > row[j]col[i + 2]
//                    row[j+1]col[i+1]
//                    row[j+2]col[i+1]  
//     row[j+2]col[i] > row[j+2]col[i + 1] > row[j+2]col[i + 2]
//push values from index's into a new array
//sum new array
// continue to row[0]col[1] until row[j]col[i+2] >= rowl.length
// and row >= arr.length  
//track higest score
