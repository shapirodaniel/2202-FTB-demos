const { Client } = require('pg');
const DB_NAME = 'db-tdd';
const CONN = `postgres://localhost:5432/${DB_NAME}`;

const client = new Client(CONN);

module.exports = client;
