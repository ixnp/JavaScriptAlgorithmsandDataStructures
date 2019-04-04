//given two strings find the number of common characters between them

// 'aabbcc and 'adcaa  the output should be 3

function commonCharacters(str1, str2) {
  let keyMapOne = mapper(str1);
  let keyMapTwo = mapper(str2);
  let counter = 0;
  let longer = str1.length > str2.length ? keyMapOne : keyMapTwo;
  let shorter = str1.length < str2.length ? keyMapOne : keyMapTwo;

  for (let key in shorter) {
    console.log(longer, shorter, key)
    if (longer[key]) {
      counter++
    }
  }
  return counter;
}

function mapper(str) {
  let map = {};
  for (let item of str) {
    console.log(item)
    if (!map[item]) {
      map[item] = 1;
    }
  }
  return map
}

commonCharacters('aabbdccz', 'adcaaefghijklmz')
