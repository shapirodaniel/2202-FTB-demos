const express = require('express');
const apiRouter = express.Router();
const puppiesRouter = require('./puppies');
const ownersRouter = require('./owners');
const tricksRouter = require('./tricks');
const puppyTricksRouter = require('./puppy_tricks');

module.exports = apiRouter;

apiRouter.get('/health', (_req, res) => {
  res.send({ message: 'healthy' });
});

apiRouter.use('/puppies', puppiesRouter);
apiRouter.use('/owners', ownersRouter);
apiRouter.use('/tricks', tricksRouter);
apiRouter.use('/puppy_tricks', puppyTricksRouter);
