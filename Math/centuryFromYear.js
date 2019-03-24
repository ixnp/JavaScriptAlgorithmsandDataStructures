//given a year return the century it's in
//1905 = 20
//1700 = 17

function century(year) {
  let centuryYear = year / 100;
  if (year % 100 === 0) return centuryYear;
  let result = Math.floor(centuryYear) + 1
  return result
}
century(1905)