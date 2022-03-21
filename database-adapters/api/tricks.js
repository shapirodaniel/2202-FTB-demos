const express = require('express');
const tricksRouter = express.Router();
const { client } = require('../db');
module.exports = tricksRouter;

tricksRouter.get('/', async (req, res, next) => {
  res.send({ tricks: [] });
});
