// given an array of strings, return another array containing all of it's longest strings. 

//in 
//["abc","aa","ad","vcd","aba"]
//out
//["aba","vcd","aba"]

function longestStrings(arr) {
  let length = 0;
  arr.forEach((item) => {
    if (item.length > length) {
      length = item.length
    }
  })
  let results = arr.filter(item => item.length === length)
  return results
}

longestStrings(["abc", "aa", "ad", "vcd", "aba"])