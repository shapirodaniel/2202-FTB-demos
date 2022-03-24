const express = require('express');
const trainsRouter = express.Router();
const { client } = require('../db');
module.exports = trainsRouter;

trainsRouter.get('/', async (req, res, next) => {
  res.send({ trains: [] });
});
