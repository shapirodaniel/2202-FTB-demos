const express = require('express');
const puppiesRouter = express.Router();
const { client } = require('../db');
module.exports = puppiesRouter;

puppiesRouter.get('/', async (req, res, next) => {
  res.send({ puppies: [] });
});
