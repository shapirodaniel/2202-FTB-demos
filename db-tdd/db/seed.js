// allows us to resolve our local filepath with the help
// of magic variables like __dirname
const path = require('path');

// gives us access to read-write filesystem commands
// for our local box that's hosting the server instance
const fsPromises = require('fs/promises');

// client instance generated in client.js
const client = require('./client');

// async since we need to leverage client commands
// any db communication is asynchronous by default
async function seed() {
  try {
    // confirm seed routine is underway
    console.log('started defining db schema and seeding db!');

    // start client connection
    await client.connect();

    // load sql queries into memory
    const schemaQuery = // read a file into memory by leveraging path.resolve()
      // this will be a Buffer, which is a serialized format
      // to work with this content in JavaScript we need to deserialize it
      // by calling .toString()
      (
        await fsPromises.readFile(path.resolve(__dirname, 'sql', 'schema.sql'))
      ).toString();
    console.log(schemaQuery);

    const seedQuery = (
      await fsPromises.readFile(path.resolve(__dirname, 'sql', 'seed.sql'))
    ).toString();
    console.log(seedQuery);

    // send them through the db via the client instance
    await client.query(schemaQuery);
    await client.query(seedQuery);

    // confirm seed is complete
    console.log('finished defining db schema and seeding db!');

    // end the client connection
    await client.end();
  } catch (err) {
    throw err;
  }
}

seed();
