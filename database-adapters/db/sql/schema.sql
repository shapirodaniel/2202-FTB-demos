drop table if exists routes, trains, tracks, stations;

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

create table routes (
  id serial primary key,
  train_id integer references trains (id),
  station_id integer references stations (id),
  track_id integer references tracks (id),
  sequence_no integer not null,
  time_in text not null,
  time_out text not null
);