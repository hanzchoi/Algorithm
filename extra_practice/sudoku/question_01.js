const correct = new Set([1,2,3,4,5,6,7,8,9]);

const VALID_SOLUTIONS = [
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

const INVALID_SOLUTIONS = [
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
  ]
];

function eqSet(as, bs) {
  //console.log(as.size, bs.size)
   if (as.size !== bs.size) return false;
   for (var a of as) if (!bs.has(a)) return false;
   return true;
}

function rowCheck(board) {
  let valid = true;

  board[0].forEach((row) => {
    //console.log(row)
    const rowSet = new Set(row);
    //console.log(rowSet);
    //console.log()
    if(!eqSet(correct, rowSet)){
      valid = false;
    }
  })
  return valid;
}

function colCheck(board){
  let valid = true;
  const boardTemp = board[0];
  for(let i=0; i < boardTemp.length; i++){
    if(valid === true){
      let colSet = new Set()
      for(let j=0; j < boardTemp[i].length; j++){
         colSet.add(boardTemp[j][i])
      }
      console.log(colSet)
      if(!eqSet(correct, colSet)){
        valid = false
        break;
      }
    }else{
      break;
    }

  }
  return valid;
}


console.log(colCheck(VALID_SOLUTIONS))
