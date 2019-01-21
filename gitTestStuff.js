const sortBackwards = arr => {
  for (let i = 3, j = 0; i > 0; i--, j++) {
    let first = arr[j];
    let last = arr[i];
    arr[j] = last;
    arr[i] = first;
  }
  return arr;
};
