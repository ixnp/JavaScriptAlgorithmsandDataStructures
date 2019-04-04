// given a rectangle matrix and a integer column retern an array containing the elements of that column;

//[
//  [1,1,1,2],
//  [0,5,0,4],
//  [2,1,3,6]
// ]
// col = 2 
// [1,0,3]

function matrixColum(arr, col) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i][col]);
  }
  return result;
}

matrixColum([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2)