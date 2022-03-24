const express = require('express');
const tracksRouter = express.Router();
const { client } = require('../db');
module.exports = tracksRouter;

tracksRouter.get('/', async (req, res, next) => {
  res.send({ tracks: [] });
});
