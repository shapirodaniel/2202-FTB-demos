const { client } = require('./');
const path = require('path');
const fsPromises = require('fs/promises');

async function buildTables() {
  try {
    const schemaQuery = (
      await fsPromises.readFile(path.resolve(__dirname, './sql/schema.sql'))
    ).toString();

    await client.query(schemaQuery);
  } catch (err) {
    throw err;
  }
}

async function populateInitialData() {
  try {
    const seedQuery = (
      await fsPromises.readFile(path.resolve(__dirname, './sql/seed.sql'))
    ).toString();

    await client.query(seedQuery);
  } catch (err) {
    throw err;
  }
}

async function seed() {
  try {
    console.log('running seed routine...');
    await client.connect();
    await buildTables();
    await populateInitialData();
  } catch (err) {
    console.error(err);
  } finally {
    console.log('seed routine complete! closing client connection...');
    client.end();
  }
}

seed();
