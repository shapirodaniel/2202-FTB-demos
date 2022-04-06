const { createUser, loginUser, client } = require('./index');

const albert = {
  username: 'albert',
  password: '123',
};

const felix = {
  username: 'felix',
  password: '123',
};

const schema = async () => {
  try {
    await client.query(`
      drop table if exists users;

      create table users (
        id serial primary key,
        username text not null unique,
        password text not null
      );
    `);
  } catch (err) {
    throw err;
  }
};

const seed = async () => {
  try {
    const users = await Promise.all(
      [albert, felix].map((user) => createUser(user))
    );

    console.dir({ users }, { depth: null });
  } catch (err) {
    throw err;
  }
};

const authenticateUser = async (user) => {
  try {
    console.log(`authenticating user with username ${user.username}`);
    await loginUser(user);
    console.log(`user successfully authenticated!`);
  } catch (err) {
    throw err;
  }
};

// IIFE: immediately invoked function expression
(async () => {
  await client.connect();
  console.log('loading schema...');
  await schema();
  console.log('schema loaded!');
  console.log('seeding db...');
  await seed();
  console.log('db seeded!');
  await authenticateUser(albert);
  await client.end();
})();
