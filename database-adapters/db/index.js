const client = require('./client');
const adapters = require('./adapters');

module.exports = { client, ...adapters };
