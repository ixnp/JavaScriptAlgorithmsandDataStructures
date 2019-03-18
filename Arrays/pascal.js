//Print out pascals triangle
//1
//11
//121
//1331
//14641
//15101051

function pascal(rowCount) {
  if (rowCount === 0) return [];
  if (rowCount === 1) return [[1]];
  const rows = [[1], [1, 1]];
  let prevRow = rows[1];

  for (let n = 1; n < rowCount - 1; n++) {
    const row = [1];
    let val = prevRow[0];

    for (let k = 0; k < prevRow.length - 1; k += 1) {
      row.push(val + (val = prevRow[k + 1]));
    }
    row.push(1);
    rows.push(row);
    prevRow = row;
  }
  rows.forEach(function (row) {
    console.log(row);
  });
  return rows;
}



//test cases 
//pascal(5)
  // [1]
  // [1, 1]
  // [1, 2, 1]
  // [1, 3, 3, 1]
  // [1, 4, 6, 4, 1]
//pascal(0)
  //[]
//pascal(1)
  //[1]
  //[[1],[1,1]]