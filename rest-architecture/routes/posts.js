const express = require('express');
const postsRouter = express.Router();

postsRouter.get('/', async (req, res, next) => {
  res.send({ message: 'hit posts route!' });
});

// build out some routes here to test your knowledge of express! :D

module.exports = postsRouter;
