const express = require('express');
const apiRouter = express.Router();
const trainsRouter = require('./trains');
const tracksRouter = require('./tracks');
const stationsRouter = require('./stations');
const schedulesRouter = require('./schedules');

module.exports = apiRouter;

apiRouter.get('/health', (_req, res) => {
  res.send({ message: 'healthy' });
});

apiRouter.use('/trains', trainsRouter);
apiRouter.use('/tracks', tracksRouter);
apiRouter.use('/stations', stationsRouter);
apiRouter.use('/schedules', schedulesRouter);
