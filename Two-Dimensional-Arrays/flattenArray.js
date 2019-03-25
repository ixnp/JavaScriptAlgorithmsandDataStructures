//Flatten a nested array


function flat(arr) {
  let results = [];
  _flatten(arr);
  function _flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) === true) {
        _flatten(arr[i]);
      } else {
        results.push(arr[i]);
      }
    }
    return;
  }
  return results;
}


flat([1, [2, [3, [4, 5, 6]]]])