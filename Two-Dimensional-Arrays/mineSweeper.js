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


///Another version that takes a built matrix
//In the popular MineSweeper game you have a board with some mines and those cells that don't contain a mine have a number that indicates the total number of mines in the neighboring cells. Starting off with some arrangemnet of mines we want to create a Minesweeper game set up

//Matrix = [[ture, false, false],
//          [false, ture, false],
//          [false, false, false]]

// outpput 
// [[1,2,1],
//  [2,1,1],
//  [1,1,1]]

function mineSweeper(matrix) {
  let mineCount = [];
  for (let i = 0; i < matrix.length; i++) {

    mineCount.push([]);
    for (let j = 0; j < matrix[i].length; j++) {

      mineCount[i][j] = 0;
      //right

      if (matrix[i][j - 1] != undefined) {
        if (matrix[i][j - 1] === true) {
          mineCount[i][j]++;
        }
      }
      //left
      if (matrix[i][j + 1] != undefined) {
        if (matrix[i][j + 1] === true) {
          mineCount[i][j]++;
        }
      }
      //up
      if (matrix[i - 1] != undefined) {
        if (matrix[i - 1][j] === true) {
          mineCount[i][j]++;

        }
        //up right
        if (matrix[i - 1][j - 1] === true) {
          mineCount[i][j]++;

        }
        // up left
        if (matrix[i - 1][j + 1] === true) {
          mineCount[i][j]++;

        }
      }
      // down
      if (matrix[i + 1] != undefined) {
        if (matrix[i + 1][j] === true) {

          mineCount[i][j]++
        }
        //down right
        if (matrix[i + 1][j + 1] === true) {
          mineCount[i][j]++
        }
        //down left
        if (matrix[i + 1][j - 1] === true) {
          mineCount[i][j]++
        }
      }

    }
  }
  return mineCount

}

mineSweeper([[true, false, false], [false, true, false], [false, false, false]]);

/// powers combined 

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
        board[j].push(true);
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

let matrix = mineSweeper(3, 4, 4);


function mineSweeperNumbers(matrix) {
  let mineCount = [];
  for (let i = 0; i < matrix.length; i++) {

    mineCount.push([]);
    for (let j = 0; j < matrix[i].length; j++) {

      mineCount[i][j] = 0;
      //right

      if (matrix[i][j - 1] != undefined) {
        if (matrix[i][j - 1] === true) {
          mineCount[i][j]++;
        }
      }
      //left
      if (matrix[i][j + 1] != undefined) {
        if (matrix[i][j + 1] === true) {
          mineCount[i][j]++;
        }
      }
      //up
      if (matrix[i - 1] != undefined) {
        if (matrix[i - 1][j] === true) {
          mineCount[i][j]++;

        }
        //up right
        if (matrix[i - 1][j - 1] === true) {
          mineCount[i][j]++;

        }
        // up left
        if (matrix[i - 1][j + 1] === true) {
          mineCount[i][j]++;

        }
      }
      // down
      if (matrix[i + 1] != undefined) {
        if (matrix[i + 1][j] === true) {

          mineCount[i][j]++
        }
        //down right
        if (matrix[i + 1][j + 1] === true) {
          mineCount[i][j]++
        }
        //down left
        if (matrix[i + 1][j - 1] === true) {
          mineCount[i][j]++
        }

      }

    }
  }
  return mineCount

}
mineSweeperNumbers(matrix)
