const express = require('express');
const schedulesRouter = express.Router();

module.exports = schedulesRouter;

schedulesRouter.get('/', async (req, res, next) => {
  res.send({ schedules: [] });
});
