function timeConversion(str) {
  let upperStr = str.toUpperCase();
  let arr = str.split('');

  if (arr.includes('P') === true && arr[0].concat(arr[1]) < 12) {
    let hour = arr[0].concat(arr[1]);
    let num = parseInt(hour)
    let militaryHour = num + 12;
    let spliceArr = arr.splice(2, 6);
    spliceArr.unshift(militaryHour)
    arr = spliceArr.join('');

  } else if (arr.includes('A') === true && arr[0].concat(arr[1]) == 12) {
    arr.splice(8, 2);
    arr.splice(0, 2)
    arr.unshift('00')
    arr = arr.join('')
  }
  else {
    arr.splice(8, 2);
    arr = arr.join('')
  }
  return arr;
}

// timeConvert('12:05:45PM');
// timeConvert('07:05:45PM');
// timeConvert('12:05:45AM');
// timeConvert('02:05:45PM');