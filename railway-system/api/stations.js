const express = require('express');
const stationsRouter = express.Router();
const { Station } = require('../db');
module.exports = stationsRouter;

// this implementation leverages query params
// query params: ?key1=value1&key2=value2...
// express gives us access to these key-val pairs
// on the req.query object

// GET /:stationId/trains/next
// { train_id, train, track, arrival, departure }
// where arrival, departure within window established by
// timeIn, timeOut HH:MM:SS strings
stationsRouter.get('/:stationId/trains/next', async (req, res, next) => {
  try {
    const { stationId } = req.params;
    const { timeIn, timeOut } = req.query;
    const schedule = await Station.getAllNextTrains({
      stationId,
      timeIn,
      timeOut,
    });
    res.status(200).send({ schedule });
  } catch (err) {
    next(err);
  }
});

// GET /:stationId/trains/:trainId/next?timeIn=&timeOut=
// this implementation leverages query parameters
// rather than req.body
stationsRouter.get(
  '/:stationId/trains/:trainId/next',
  async (req, res, next) => {
    try {
      const { stationId, trainId } = req.params;
      const { timeIn, timeOut } = req.query;
      const schedule = await Station.getNextTrainScheduleByTrainId({
        stationId,
        trainId,
        timeIn,
        timeOut,
      });
      res.status(200).send({ schedule });
    } catch (err) {
      next(err);
    }
  }
);
