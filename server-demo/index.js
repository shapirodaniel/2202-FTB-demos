const express = require('express');
const server = express();
const PORT = 3000;

let userIdCount = 0;

const userIds = {
  pizza: {
    id: ++userIdCount,
    visits: 0,
  },
};

// we need to think about how incoming data is handled by the server
// and we accomplish this through the use of functions called "middlewares"
// middleware is any function that sits in the middle of the request, response cycle
server.use(express.json());

// the server knows how to handle incoming requests based on the type of resource and method that are being supplied
server.get('/', (req, res) => {
  console.log('hit the root route of our server!');
  res.send(
    `<h1>welcome to my server root!<h2>userId is ${
      userIds[Object.keys(userIds)[0]]
    }</h2></h1>`
  );
});

// post requests allow us to access a body, containing serialized data sent from a remote client or another server
server.post('/', (req, res) => {
  // grabbed some incoming data
  const { newUserId } = req.body;
  // used the incoming data to modify an existing data structure on the server itself

  // log on the server if this user has already visited, and how many times
  if (!userIds[newUserId]) {
    userIds[newUserId] = {
      id: ++userIdCount,
      visits: 0,
    };
  }
  ++userIds[newUserId].visits;

  console.dir(userIds, { depth: null });

  res.send(`successful post request!`);
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
