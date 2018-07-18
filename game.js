const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

var boardState = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

console.log('Welcome to the new game!')
var piecesPlaced = 0;

// while (piecesPlaced < 10) {
//   rl.pause();

//   rl.question('Player 1: Where would you like to place your piece?', (answer) => {
//     // update board state
  
//     // if player selects unavailable square, ask again
  
//     // check for winner

//     rl.resume();
//   });

// }

rl.prompt();
rl.on('line', (input) => {
  // update board state

  // if player selects unavailable square ask again

  // check for winner


  console.log('input: ', input)
});


