drop table if exists users, posts;

create table users (
  id serial primary key,
  username text not null,
  password text not null
);

create table posts (
  id serial primary key,
  user_id integer references users (id),
  content text not null
);