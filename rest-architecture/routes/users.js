const express = require('express');
const usersRouter = express.Router();
let users = require('../data/users');

let userId = 5;

// GET /api/users
usersRouter.get('/', async (req, res, next) => {
  // good practice: use object shorthand notation
  // to attach all data structures that are being sent
  // back from a route!
  res.send({ users });
});

// GET /api/users/:id
usersRouter.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === +id);

  // the convention from REST apis is to serve JSON
  // generally, it makes sense to send always and only a single object back
  // containing fields that map to all the data points you want
  // to make available from that particular endpoint
  res.send({ user: foundUser });
});

// POST /api/users
usersRouter.post('/', async (req, res, next) => {
  // always destructure the request body!
  // it's a matter of security, we want to make sure
  // that we protect ourselves from malicious user input
  const { username, password, email } = req.body;
  const createdUser = { id: ++userId, username, password, email };

  users.push(createdUser);

  res.status(201).send({
    success: true,
    error: null,
    data: {
      message: `Successful user creation with id=${userId}`,
      user: createdUser,
    },
  });
});

// PATCH /api/users/:id
// PATCH stands for "partial resource modification", we don't actually know what the end user/client is going to send us!
usersRouter.patch('/:id', async (req, res, next) => {
  const { username, password, email } = req.body;
  const body = { username, password, email };

  for (const key in body) {
    if (body[key] === undefined) {
      delete body[key];
    }
  }

  // i need to find a user, preferably by the req.params.id value
  // then, i need to modify whatever fields are present on my sanitized body
  for (const key in users) {
    let currentUser = users[key];

    if (currentUser.id === +req.params.id) {
      console.log('currentUser before overwrite: ', currentUser);
      currentUser = { ...currentUser, ...body };
      console.log('currentUser after overwrite: ', currentUser);

      users = users.map((user) => {
        if (user.id === +req.params.id) {
          return currentUser;
        }
        return user;
      });

      res.status(204).send({ user: currentUser });
    }
  }
});

// DELETE /api/users/:id
usersRouter.delete('/:id', async (req, res, next) => {
  const { id } = req.params;

  const userToDelete = users.find((user) => user.id === +id);
  users = users.filter((user) => user.id !== +id);

  res.status(204).send({ user: userToDelete });
});

module.exports = usersRouter;
