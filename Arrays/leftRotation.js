//given an array and a number(n)
//shift the array left n times
// [1,2,3,4,5], 2
//[3,4,5,1,2]

function leftRotation(arr, n) {
  var arrTemp = [];
  for (var i = 0; i < arr.length; i++) {
    arrTemp.push(arr[i]);
  };

  for (var j = 1; j <= n; j++) {

    arrTemp.shift(arrTemp.push(arrTemp[0]));

  }
  return arrTemp;
}