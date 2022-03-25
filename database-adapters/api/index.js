const express = require('express');
const apiRouter = express.Router();
const usersRouter = require('./users');
const trainsRouter = require('./trains');
const tracksRouter = require('./tracks');
const stationsRouter = require('./stations');
const schedulesRouter = require('./schedules');
const authMiddleware = require('./auth');

module.exports = apiRouter;

apiRouter.get('/', authMiddleware, (req, res) => {
  if (req.user.isAdmin) {
    res.status(200).send({ isAdmin: true });
  }

  res.sendStatus(403);
});

apiRouter.get('/health', (_req, res) => {
  res.send({ message: 'healthy' });
});

apiRouter.use('/users', usersRouter);
apiRouter.use('/trains', trainsRouter);
apiRouter.use('/tracks', tracksRouter);
apiRouter.use('/stations', stationsRouter);
apiRouter.use('/schedules', schedulesRouter);
