const express = require('express');
const postsRouter = express.Router();

postsRouter.get('/', async (req, res, next) => {
  res.send('hit posts route');
});

module.exports = postsRouter;
