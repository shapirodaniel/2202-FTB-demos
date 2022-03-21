-- let's create a series of tables
-- and let's make them depend on each other
-- we can make this script IDEMPOTENT
-- FANCY WORD for repeatable :)
-- by DROPPING any entities that we create BEFORE reseeding

-- it's a schema since it organizes the "lay of the land"
-- and tells us how tables are structured
DROP TABLE IF EXISTS users, posts;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email TEXT NOT NULL 
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  user_id INTEGER REFERENCES users (id)
);