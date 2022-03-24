drop table if exists 
  schedules, 
  trains, 
  tracks, 
  stations, 
  admins, 
  employees;

drop type if exists employee_type;

create type employee_type as enum(
  'station_attendant', 
  'conductor', 
  'dispatcher', 
  'yard_master'
);

create table employees (
  id serial primary key,
  employee_type employee_type not null
);

-- in create admin logic, we'll check the employee_type 
-- of the employee id we're attempting to add to the admins table
-- if it's not dispatcher or admin, we'll reject the transaction
create table admins (
  id serial primary key,
  employee_id integer references employees (id)
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
  time_in text not null,
  time_out text not null
);