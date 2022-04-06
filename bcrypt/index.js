const express = require('express');
const server = express();
const PORT = 4000;

const { client } = require('./db');

server.listen(PORT, async () => {
  console.log(`server listening on port ${PORT}`);

  try {
    await client.connect();
    console.log(`postgres client connected!`);
  } catch (err) {
    console.error(err);
  }
});
