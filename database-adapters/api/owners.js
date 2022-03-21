const express = require('express');
const ownersRouter = express.Router();
const { client } = require('../db');
module.exports = ownersRouter;

ownersRouter.get('/', async (req, res, next) => {
  res.send({ owners: [] });
});
