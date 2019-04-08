/*
 * Given a completed sudoku board, an array of arrays containing the solution,
 * check if the solution is valid or not.
 *
 * In a valid solution, each column, each row, and each of the nine 3x3
 * subgrids that compose the grid (also called "boxes", "blocks", "regions", or
 * "subsquares") contains all of the digits from 1 to 9.
 * [https://en.wikipedia.org/wiki/Sudoku]
 */

 function eqSet(as, bs) {
    if (as.size !== bs.size) return false;
    for (var a of as) if (!bs.has(a)) return false;
    return true;
}

const correct = new Set([1,2,3,4,5,6,7,8,9]);

function rowCheck(board) {
  board.forEach((row) => {
    const rowSet = new Set(row);
    if(!eqSet(correct, rowSet)){
      return false;
    }
  })
  return true;
}

function colCheck(board){
  for(let i=0; i < board.length; i++){
    let colSet = new Set()
    for(let j=0; j < board[i].length; j++){
       colSet.add(board[j][i])
    }
    if(!eqSet(correct, colSet)){
      return false
    }
  }
  return true;
}


function sudokuIsValid(board) {
  //console.log(rowCheck(board))
  return rowCheck(board)
  //throw new Error('NotImplementedError');
}

function test() {
  var VALID_SOLUTIONS = [
    [
      [9, 1, 6, 8, 4, 3, 5, 2, 7],
      [8, 4, 2, 7, 5, 6, 9, 3, 1],
      [7, 5, 3, 2, 9, 1, 8, 6, 4],
      [3, 6, 4, 9, 2, 7, 1, 8, 5],
      [2, 8, 1, 5, 6, 4, 7, 9, 3],
      [5, 9, 7, 1, 3, 8, 2, 4, 6],
      [6, 7, 8, 4, 1, 9, 3, 5, 2],
      [4, 2, 9, 3, 7, 5, 6, 1, 8],
      [1, 3, 5, 6, 8, 2, 4, 7, 9],
    ]
  ];

  var INVALID_SOLUTIONS = [
      [
          [9, 9, 6, 8, 4, 3, 5, 2, 7],
          [8, 4, 2, 7, 5, 6, 9, 3, 1],
          [7, 5, 3, 2, 9, 1, 8, 6, 4],
          [3, 6, 4, 9, 2, 7, 1, 8, 5],
          [2, 8, 1, 5, 6, 4, 7, 9, 3],
          [5, 9, 7, 1, 3, 8, 2, 4, 6],
          [6, 7, 8, 4, 1, 9, 3, 5, 2],
          [4, 2, 9, 3, 7, 5, 6, 1, 8],
          [1, 3, 5, 6, 8, 2, 4, 7, 9],
      ], [
          [9, 0, 6, 8, 4, 3, 5, 2, 7],
          [8, 4, 2, 7, 5, 6, 9, 3, 1],
          [7, 5, 3, 2, 9, 1, 8, 6, 4],
          [3, 6, 4, 9, 2, 7, 1, 8, 5],
          [2, 8, 1, 5, 6, 4, 7, 9, 3],
          [5, 9, 7, 1, 3, 8, 2, 4, 6],
          [6, 7, 8, 4, 1, 9, 3, 5, 2],
          [4, 2, 9, 3, 7, 5, 6, 1, 8],
          [1, 3, 5, 6, 8, 2, 4, 7, 9],
      ], [
          [9, 1, 6, 8, 4, 3, 5, 2, 7],
          [8, 4, 2, 7, 5, 6, 9, 3, 1],
          [7, 5, 9, 2, 9, 1, 8, 6, 4],
          [3, 6, 4, 9, 2, 7, 1, 8, 5],
          [2, 8, 1, 5, 6, 4, 7, 9, 3],
          [5, 9, 7, 1, 3, 8, 2, 4, 6],
          [6, 7, 8, 4, 1, 9, 3, 5, 2],
          [4, 2, 9, 3, 7, 5, 6, 1, 8],
          [1, 3, 5, 6, 8, 2, 4, 7, 9],
      ], [
          [9, 1, 'a', 8, 4, 3, 5, 2, 7],
          [8, 4, 2, 7, 5, 6, 9, 3, 1],
          [7, 5, 9, 2, 9, 1, 8, 6, 4],
          [3, 6, 4, 9, 2, 7, 1, 8, 5],
          [2, 8, 1, 5, 6, 4, 7, 9, 3],
          [5, 9, 7, 1, 3, 8, 2, 4, 6],
          [6, 7, 8, 4, 1, 9, 3, 5, 2],
          [4, 2, 9, 3, 7, 5, 6, 1, 8],
          [1, 3, 5, 6, 8, 2, 4, 7, 9],
      ], [
          [9, 1, 'a', 8, 4, 3, 5, 2, 7],
          [8, 4, 2, 7, 5, 6, 9, 3, 1],
          [7, 5, 9, 2, 9, 1, 8, 6, 4],
          [3, 6, 4, 9, 2, 7, 1, 8, 5],
          [2, 8, 1, 5, 6, 4, 7, 9, 3],
          [5, 9, 7, 1, 3, 8, 2, 4, 6],
          [6, 7, 8, 4, 1, 9, 3, 5, 2],
          [4, 2, 9, 3, 7, 5, 6, 1, 8],
          [3, 5, 6, 8, 2, 4, 7, 9],
      ]
  ];

  var idx;
  for (idx in VALID_SOLUTIONS) {
    var validSolution = VALID_SOLUTIONS[idx];
    if (!sudokuIsValid(validSolution)) {
      throw new Error('Valid solution failed');
    }

  }
  for (idx in INVALID_SOLUTIONS) {
    var invalidSolution = INVALID_SOLUTIONS[idx];
    if (sudokuIsValid(invalidSolution)) {
      throw new Error('Invalid solution failed');
    }
  }
  console.log('Tests pass!');
}

test();
