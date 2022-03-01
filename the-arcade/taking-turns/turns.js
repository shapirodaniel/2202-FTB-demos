// grab the inputs
// assign their values to state
// by leveraging the change event
const state = {
  player1: '', // input values from player1 where input.name === "player1"
  player2: '', // input values from player2
  numMoves: 0,
};

const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');

player1Input.addEventListener('change', (e) => {
  const node = e.target;
  const playerName = node.value;
  state.player1 = playerName;
});

player2Input.addEventListener('change', (e) => {
  const node = e.target;
  const playerName = node.value;
  state.player2 = playerName;
});

const registerPlayersBtn = document.getElementById('register-players');

registerPlayersBtn.addEventListener('click', () => {
  console.log(state);
});

// so now let's think about how to take turns
// for instance, in tic-tac-toe :)
// we can mod the numMoves value on state
// to figure out whose move it is!
const takeTurnBtn = document.getElementById('take-turn');

takeTurnBtn.addEventListener('click', () => {
  // let's figure out which move we want to place
  // for instance, if you're doing tic tac toe, you probably
  // want to alternate Xs and Os

  // ternary statements are structured: expression ? yes : no
  const move = state.numMoves % 2 === 0 ? 'X' : 'O';
  const playerName = state.numMoves % 2 === 0 ? state.player1 : state.player2;

  // object-shorthand notation
  // this lets us assign a key-value pair
  // by simply stating an existing variable
  // the effect is: we end up with an object that looks like this
  /* 
  
    {
      playerName: playerName,
      move: move
    }
  
  */
  console.log({ playerName, move });
  state.numMoves++;
});
