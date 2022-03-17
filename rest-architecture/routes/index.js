const express = require('express');
const apiRouter = express.Router();
const usersRouter = require('./users');
const postsRouter = require('./posts');

// health check is a great "sanity check" that your API is hooked up correctly :)
apiRouter.get('/health', async (req, res, next) => {
  res.send({ message: 'healthy' });
});

apiRouter.use('/users', usersRouter);
apiRouter.use('/posts', postsRouter);

// assign your routers directly to module.exports
module.exports = apiRouter;
