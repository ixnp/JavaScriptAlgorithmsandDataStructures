function addBorder(arr) {
  const length = '*'.repeat(arr[0].length + 2);
  arr.unshift(length);
  arr.push(length);
  for (let i = 1; i < arr.length; i++) {
    arr[i] = '*'.concat(arr[i], '*');
  }
  return arr
}

addBorder(['abc', '123']);