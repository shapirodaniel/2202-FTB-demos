const express = require('express');
const apiRouter = express.Router();
const usersRouter = require('./users');
const postsRouter = require('./posts');

apiRouter.get('/health', (_req, res) => {
  res.send({ message: 'healthy' });
});

apiRouter.use('/users', usersRouter);
apiRouter.use('/posts', postsRouter);

module.exports = apiRouter;
