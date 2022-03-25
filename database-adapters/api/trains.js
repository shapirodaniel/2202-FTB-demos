const express = require('express');
const trainsRouter = express.Router();

module.exports = trainsRouter;

trainsRouter.get('/', async (req, res, next) => {
  res.send({ trains: [] });
});
