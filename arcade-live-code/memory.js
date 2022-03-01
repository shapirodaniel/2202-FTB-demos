//////////
/* DATA */
//////////

// source.unsplash.com/random/200x200?fun
// each image will be placed twice randomly in a game board
// Array.prototype.find() -> return an object based on callback function that lets you target a particular element in the array
const images = [
  {
    id: 1,
    name: 'dragon',
    url: 'https://images.unsplash.com/photo-1597347025162-49046e06e284?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnVufHx8fHx8MTY0NjE0MTEwMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
  },
  {
    id: 2,
    name: 'kayak',
    url: 'https://images.unsplash.com/photo-1527008842634-b7c49a2c0d3b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnVufHx8fHx8MTY0NjE0MTQzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
  },
  {
    id: 3,
    name: 'kiwi',
    url: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnVufHx8fHx8MTY0NjE0MTE5MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
  },
  {
    id: 4,
    name: 'smiley-balloon',
    url: 'https://images.unsplash.com/photo-1526297003708-f5a1c2c9c6e7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnVufHx8fHx8MTY0NjE0MTIzMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
  },
  {
    id: 5,
    name: 'candy',
    url: 'https://images.unsplash.com/photo-1517157837591-17b69085bfdc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnVufHx8fHx8MTY0NjE0MTI2NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
  },
  {
    id: 6,
    name: 'doggo',
    url: 'https://images.unsplash.com/photo-1590767950092-42b8362368da?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnVufHx8fHx8MTY0NjE0MTI5Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
  },
  {
    id: 7,
    name: 'wall-bike',
    url: 'https://images.unsplash.com/photo-1614098805147-61657513491f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnVufHx8fHx8MTY0NjE0MTM0MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
  },
  {
    id: 8,
    name: 'ghosts',
    url: 'https://images.unsplash.com/photo-1604819360294-88464109e919?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnVufHx8fHx8MTY0NjE0MTM5Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
  },
];

const questionMarkImage = './assets/question-mark.png';

/////////////////
/* BOARD SETUP */
/////////////////

function createEmptyBoard(images) {
  const board = [];
  const len = images.length / 2;

  for (let i = 0; i < len; i++) {
    board.push(new Array(len).fill(null));
  }

  return board;
}

console.log(createEmptyBoard(images));

function initializeBoard(images) {
  // since memory requires only and exactly 2 of the same image
  // distributed RANDOMLY, we're going to need a way
  // of figuring out how to only place an image id twice

  const board = createEmptyBoard(images);
  const ids = {
    // 1: 2
  };

  // i'm going to use this ids object
  // to track how many times i've assigned a given image's object id
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let randomId = Math.ceil(Math.random() * images.length);

      // reselect if id has been used twice
      // in order to guarantee we select each image only and exactly twice
      while (ids[randomId] === 2) {
        console.log('reselecting');
        randomId = Math.ceil(Math.random() * images.length);
      }

      // have i used this id yet? if so, it will
      // ALREADY have been assigned to my ids object
      // so i'm going to increment it
      if (ids[randomId]) {
        ids[randomId]++;
      } else {
        ids[randomId] = 1;
      }

      board[i][j] = randomId;
    }
  }

  return board;
}

console.log(initializeBoard(images));

/* const initialSetup = [
  [5, 3, 2, 7],
  [2, 4, 6, 8],
  [8, 1, 6, 3],
  [5, 4, 7, 1],
]; */

///////////
/* STATE */
///////////

// by separating initialState and state
// we can reinitialize a game for "play again" functionality
// by replacing state with a fresh copy of initialState
const initialState = {
  board: initializeBoard(images),
  visiblePairs: {},
  exposedCards: [],
  winner: null,
};

let state = { ...initialState };

// easy way to get game replay functionality
function restartGame() {
  state = { ...initialState };
}

//////////////////////
/* BUILD GAME BOARD */
//////////////////////

function buildDOMBoard() {
  // i'll grab the element from the DOM that represents my game board
  const DOMBoard = document.getElementById('board');
  // object destructuring is a variable assignment
  // that leverages our knowledge of defined properties and methods
  // on an object
  const { board } = state;
  let nodeId = 1;

  // i'd like to translate my initial game state's board
  // into actual DOM elements
  // each of which will be an image tag

  // double loop my board, to grab a particular cell
  // ie, board[i][j] -> this value is an id to one of my images objects
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const imgId = board[i][j];
      const img = document.createElement('img');

      img.id = `img:${nodeId}`; // this will let me compare nodes in the future
      img.src = questionMarkImage;

      // you can actually store data on HTMLElements
      // by leveraging a special property called the "dataset"
      img.dataset.imgId = imgId;

      DOMBoard.appendChild(img);

      nodeId++;
    }
  }
}

buildDOMBoard();

// live-server injected its markup and it's being rendered into page
// this masks that script injection
document.body.querySelector('script').style.display = 'none';
