// if i were building minesweeper, here's where i'd probably start
const state = {
  board: new Array(10)
    .fill(null)
    .map((_, idx) =>
      new Array(10).fill(null).map(() => Math.floor(Math.random() * 3))
    ),
  winner: null, // but it will be player1 or player2, or if it's solo game, maybe just false / true
  player1: null,
  player2: null,
  moves: 0,
};

/* possible game board */
// const board = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
// ];

function hydrate() {
  const player1Input = document.getElementById('player1Info');
  const player2Input = document.getElementById('player2Info');
  const registerPlayersBtn = document.getElementById('register-players');

  registerPlayersBtn.addEventListener('click', () => {
    state.player1 = player1Input.value;
    state.player2 = player2Input.value;

    console.log(
      "players ready! here's the names",
      state.player1,
      state.player2
    );
  });

  const gameBoard = state.board
    .map((row) =>
      row.map((square) => `<span class="square">${square}</span>`).join('')
    )
    .join('');

  const board = document.getElementById('board');
  board.innerHTML = gameBoard;

  board.addEventListener('click', (event) => {
    state.moves++;

    if (state.moves === 5) {
      state.winner = state.moves % 2 === 1 ? 'player1' : 'player2';
      console.log(`${state[state.winner]} wins!`);
    }
  });
}

hydrate();

// // visualize my changes before moving forward
// setInterval(() => {
//   console.dir(state, { depth: null });
// }, 1000);
