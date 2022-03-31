const express = require('express');
const server = express();
const PORT = 4000;
const apiRouter = require('./api');
const { client } = require('./db');

server.use(express.json());
server.use('/api', apiRouter);

const handle = server.listen(PORT, async () => {
  console.log(`server listening on port ${PORT}`);

  try {
    await client.connect();
    console.log('db client successfully connected!');
  } catch (err) {
    console.error(err);
  }
});

module.exports = { handle, server };
