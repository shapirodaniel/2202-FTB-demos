const { Client } = require('pg');
const conn = `postgres://localhost:5432/bcrypt-test`;
const client = new Client(conn);
const bcrypt = require('bcrypt');

// salt rounds are a random element that we insert
// in the hashing process
// that guarantees it'll be super difficult, if not impossible
// to non-randomly regenerate a hash given a plain text input
const SALT_ROUNDS = 10;

// if a malicious user knows the length of a hashed password
// in our db schema / tables
// they can run a ton of GPUs randomly cranking out strings
// of that length
// and test them infinitely against a hashed password
// this only works out for them under super specific conditions
// which are: all of our hashed passwords have been leaked :(

// moore's law says something like compute power doubles every couple of years
// and storage space increases 4x
// salt rounds can be increased
// the greater the salt rounds, the longer the hashing process takes
// this protects end users from moore's law :)

module.exports = { client, createUser, loginUser };

async function createUser({ username, password }) {
  // we need to make sure plain text passwords
  // never hit our database
  // so we're going to preprocess password input
  // at the time of user creation
  // and ONLY store the HASHED version of the password

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  try {
    const {
      rows: [user],
    } = await client.query(
      `
      insert into users (username, password)
      values ($1, $2)
      returning *;
    `,
      [username, hashedPassword]
    );

    return user;
  } catch (err) {
    throw err;
  }
}

async function loginUser({ username, password }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      select * from users
      where username = $1;
    `,
      [username]
    );

    // we know the user at the time of creation
    // had their password value stored in hashed form
    // so we'll need to compare the password they're sending us
    // through the authentication process (in plain text)
    // and convert it to its hashed value
    // to compare the strings

    // password comparison
    // bcrypt.compare() returns a boolean
    if (await bcrypt.compare(password, user.password)) {
      return user;
    } else {
      throw new Error('Invalid login credentials.');
    }
  } catch (err) {
    throw err;
  }
}
