const express = require('express');
const puppyTricksRouter = express.Router();
const { client } = require('../db');
module.exports = puppyTricksRouter;

puppyTricksRouter.get('/', async (req, res, next) => {
  res.send({ puppyTricks: [] });
});
