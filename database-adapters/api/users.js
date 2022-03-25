const express = require('express');
const usersRouter = express.Router();
const { User } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
module.exports = usersRouter;

usersRouter.post('/register', async (req, res, next) => {
  try {
    const { username, password, type } = req.body;
    const user = await User.createUser({ username, password, type });
    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET
    );
    res.send({ message: 'welcome!', token });
  } catch (err) {
    next(err);
  }
});

usersRouter.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.getUser({ username, password });

    if (user) {
      const token = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET
      );
      res.send({ messsage: 'welcome back!', token });
    } else {
      throw new Error('User credentials do not match.');
    }
  } catch (err) {
    next(err);
  }
});
