const express = require('express');
const stationsRouter = express.Router();
const { client } = require('../db');
module.exports = stationsRouter;

stationsRouter.get('/', async (req, res, next) => {
  res.send({ stations: [] });
});
