const express = require('express');
const tracksRouter = express.Router();

module.exports = tracksRouter;

tracksRouter.get('/', async (req, res, next) => {
  res.send({ tracks: [] });
});
