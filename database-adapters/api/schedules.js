const express = require('express');
const schedulesRouter = express.Router();
const { client } = require('../db');
module.exports = schedulesRouter;

schedulesRouter.get('/', async (req, res, next) => {
  res.send({ schedules: [] });
});
