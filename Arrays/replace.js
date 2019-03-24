//Given an array of integers, replace all the occurrences of elementToReplace with subsitutionElem
//[1,2,1] replace = 1 subElm =3 [3,2,3]

function arrayReplace(arr, replace, subElm) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] === replace ? arr[i] = subElm : arr[i]
  }
  return arr;
}

arrayReplace([1, 2, 1], 1, 3)