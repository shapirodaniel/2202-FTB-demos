const express = require('express');
const usersRouter = express.Router();
const { User } = require('../db');

usersRouter.get('/:id', async (req, res, next) => {
  try {
    const user = await User.getUserById(req.params.id);
    res.send({ user });
  } catch (err) {
    next(err);
  }
});

module.exports = usersRouter;
