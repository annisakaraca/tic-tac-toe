const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

var board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

console.log('Welcome to the new game!')
var piecesPlaced = 0;


var currentPlayer = 'X';

rl.prompt();
rl.on('line', (input) => {
  // update board state
  // if player selects unavailable square ask again
  var row = Number(input[0]);
  var col = Number(input[1]);
  if (row > 2 || col > 2 || board[row][col] !== 0) {
    console.log('Not a valid move. Please try again.')
  } else {
    board[row][col] = currentPlayer;
    renderBoard(board);
  }


  // check for winner
  if (checkWin(board, currentPlayer)) {
    console.log(`Congratulations Player ${currentPlayer}! You're the winner.`)
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    console.log(`Your move Player ${currentPlayer}`);
  }
});

var checkWin = (board, player) => {
  return (checkRows(board, player) || checkCols(board, player) || checkDiag(board, player));
}

var checkRows = (board, player) => {
  for (var x = 0; x < 3; x++) {
    if (board[x][0] === player && board[x][1] === player && board[x][2] === player) {
      return true;
    }
  }
  return false;
}

var checkCols = (board, player) => {
  for (var x = 0; x < 3; x++) {
    if (board[0][x] === player && board[1][x] === player && board[2][x] === player) {
      return true
    }
  }
  return false;
}

var checkDiag = (board, player) => {
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  } else if (board[0][2] === player && board[1][1] === player && board[2][0] === player){
    return true;
  } 
  return false;
}

var renderBoard = (board) => {
  console.log(`
  ${board[0][0]} | ${board[0][1]} | ${board[0][2]} 
  ---------- 
  ${board[1][0]} | ${board[1][1]} | ${board[1][2]} 
  ---------- 
  ${board[2][0]} | ${board[2][1]} | ${board[2][2]} 
  `);
}