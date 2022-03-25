require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./api');
const PORT = 4000;
const server = express();
const { client } = require('./db');

server.use(morgan('dev'));
server.use(express.json());
server.use('/api', apiRouter);

const handle = server.listen(PORT, async () => {
  console.log(`server listening on port ${PORT}`);

  try {
    await client.connect();
  } catch (err) {
    console.error(err);
  }
});

// for test runner
module.exports = { handle, server };
