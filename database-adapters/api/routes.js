const express = require('express');
const routesRouter = express.Router();
const { client } = require('../db');
module.exports = routesRouter;

routesRouter.get('/', async (req, res, next) => {
  res.send({ routes: [] });
});
