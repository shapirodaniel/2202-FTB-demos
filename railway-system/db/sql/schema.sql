drop table if exists 
  schedules, 
  trains, 
  tracks, 
  stations, 
  admins, 
  users;

drop type if exists user_type;

create type user_type as enum(
  'passenger',
  'station_attendant', 
  'conductor', 
  'dispatcher', 
  'yard_master'
);

create table users (
  id serial primary key,
  username text not null,
  password text not null,
  user_type user_type not null
);

-- in create admin logic, we'll check the user_type 
-- of the user id we're attempting to add to the admins table
-- if it's not dispatcher or admin, we'll reject the transaction
create table admins (
  id serial primary key,
  user_id integer references users (id)
);

create table stations (
  id serial primary key,
  station_name varchar(255) not null
);

create table tracks (
  id serial primary key,
  track_name varchar(255) not null
);

create table trains (
  id serial primary key,
  train_name varchar(255) not null
);

create table schedules (
  id serial primary key,
  train_id integer references trains (id),
  station_id integer references stations (id),
  track_id integer references tracks (id),
  sequence_no integer not null,
  time_in varchar(255) not null,
  time_out varchar(255) not null
);