//Given two cells on a standard chess board determin weather they have the same color or not

function chessBoardCellCollor(cell1, cell2) {
  const board = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8
  };

  let total1 = board[cell1[0]] + parseInt(cell1[1]);
  let total2 = board[cell2[0]] + parseInt(cell2[1]);

  return total1 % 2 === total2 % 2;
}

chessBoardCellCollor('a1', 'c1')