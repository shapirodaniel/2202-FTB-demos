const client = require('../client');

module.exports = {
  createUser,
  getUser,
};

async function createUser({ username, password, type }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users (username, password, user_type)
      VALUES ($1, $2, $3)
      RETURNING *;
    `,
      [username, password, type]
    );

    return user;
  } catch (err) {
    throw err;
  }
}

async function getUser({ username, password }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT * FROM users
    WHERE username = $1 AND password = $2;
  `,
      [username, password]
    );

    return user;
  } catch (err) {
    throw err;
  }
}
