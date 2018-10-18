//Build Minesweeper
//Takes width, height, mines
// returns an array of arrays with mines randomly placed.
// Notes:
// Build out board
// get mine width, height locatios with math.random
//loop building out arrays

function mineSweeper(width, height, mines) {
  let board = [];
  let mineMap = {};
  _mine(width, height, mines, board, mineMap);

  for (let i = 0; i < height; i++) {
    board.push([]);
  }

  for (let j = 0; j < height; j++) {
    for (let h = 0; h < width; h++) {
      if (mineMap[[j, h]]) {
        board[j].push("mine");
      } else {
        board[j].push("0");
      }
    }
  }

  return board;
}

function _mine(width, height, mines, board, mineMap) {
  for (let m = 0; m < mines; m++) {
    let mineW = Math.floor(Math.random() * width);
    let mineH = Math.floor(Math.random(height) * height);
   
    if (!mineMap[[mineW, mineH]]) {
      mineMap[[mineW, mineH]] = true;
    } else {
   
      _mine(width, height, m, board, mineMap);
    }
  }
}

mineSweeper(3, 4, 4);
