// source.unsplash.com/random/200x200?fun
// each image will be placed twice randomly in a game board
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

function createEmptyBoard(images) {
  const board = [];
  const len = images.length / 2;

  for (let i = 0; i < len; i++) {
    board.push(new Array(len).fill(null));
  }

  return board;
}

function initializeBoard(images) {
  const board = createEmptyBoard(images);
  const ids = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let randomId = Math.ceil(Math.random() * images.length);

      // reselect if id has been used twice
      // this guarantees we select each image only and exactly twice
      while (ids[randomId] === 2) {
        // console.log('reselecting');
        randomId = Math.ceil(Math.random() * images.length);
      }

      board[i][j] = randomId;

      // track id usage on ids object
      // if id has been used, it will be registered with a value of 1
      // increment it
      // otherwise, id is not defined on ids object yet
      // initialize it with a value of 1
      if (ids[randomId]) {
        // console.log('id already used once');
        ids[randomId]++;
      } else {
        // console.log('id has not been used yet');
        ids[randomId] = 1;
      }
    }
  }

  return board;
}

const initialState = {
  board: initializeBoard(images),
  visiblePairs: {},
  exposedCards: [],
  winner: null,
};

const state = { ...initialState };

function buildDOMBoard() {
  const DOMBoard = document.getElementById('board');
  const { board } = state;
  let nodeId = 1;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const imgId = board[i][j];
      const img = document.createElement('img');

      img.id = `img:${nodeId}`;
      img.src = './assets/question-mark.png';
      img.dataset.imgId = imgId;

      DOMBoard.appendChild(img);

      nodeId++;
    }
  }
}

buildDOMBoard();

function handleMove(node) {
  console.log(node);
  // object destructuring
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { exposedCards, visiblePairs } = state;

  // case: exposedCards array is empty
  if (!exposedCards.length) {
    node.dataset.visible = true;
    exposedCards.push(node.cloneNode(true));
    return;
  }

  // case: exposedCards array is not empty
  if (exposedCards[0].dataset.imgId === node.dataset.imgId) {
    // if imgIds match, add to visiblePairs
    visiblePairs[node.dataset.imgId] = true;
  }

  // set visibility data of both cards
  const exposedCard = exposedCards.pop();
  node.dataset.visible = false;
  exposedCard.dataset.visible = false;
}

document.getElementById('board').addEventListener('click', (e) => {
  if (!e.target.tagName === 'IMG') return;

  handleMove(e.target);
  renderState();
});

function renderState() {
  const { visiblePairs, exposedCards } = state;
  const boardSquares = Array.from(document.querySelectorAll('#board img'));

  for (let i = 0; i < boardSquares.length; i++) {
    const currentSquare = boardSquares[i];

    const cardIsAlreadyExposed =
      exposedCards[0] && exposedCards[0].id === currentSquare.id;

    const cardBelongsToVisiblePairs = visiblePairs[currentSquare.dataset.imgId];

    function getImgUrl(card) {
      return images.find((image) => image.id === +card.dataset.imgId).url;
    }

    if (cardIsAlreadyExposed || cardBelongsToVisiblePairs) {
      currentSquare.src = getImgUrl(currentSquare);
    } else {
      currentSquare.src = questionMarkImage;
    }
  }
}
