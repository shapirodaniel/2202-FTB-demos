-- train schedules organized by station name and time_in 
-- good candidate for common-table expression
select 
	schedules.id,
	schedules.sequence_no,
	schedules.time_in,
	schedules.time_out, 
	trains.train_name, 
	tracks.track_name, 
	stations.station_name 
from schedules
join trains on trains.id = schedules.train_id
join tracks on tracks.id = schedules.track_id
join stations on stations.id = schedules.station_id
order by station_name, time_in ASC;

-- get admins
select 
	admins.id,
	employees.employee_type
from admins
join employees on employees.id = admins.employee_id;

-- how many trains pass through a given station
-- in a given timeframe (start, end)
-- this query could be used to drive a "plan my trip" feature
with schedules as (
	select 
		schedules.id,
		schedules.sequence_no,
		schedules.time_in,
		schedules.time_out, 
		trains.train_name, 
		tracks.track_name, 
		stations.station_name 
	from schedules
	join trains on trains.id = schedules.train_id
	join tracks on tracks.id = schedules.track_id
	join stations on stations.id = schedules.station_id
	order by station_name, time_in ASC
) 
select 
	schedules.train_name as train,
	schedules.time_in as arrival,
	schedules.time_out as departure
from schedules
-- 2 ways of handling the timestamp conversion:
-- 1. to_timestamp function >>
-- where 
-- 	to_timestamp(
-- 		schedules.time_in, 'HH24:MI:SS'
-- 	) >= to_timestamp('08:00:00', 'HH24:MI:SS')
--   and
-- 	to_timestamp(
-- 		schedules.time_out, 'HH24:MI:SS'
-- 	) <= to_timestamp('08:30:00', 'HH24:MI:SS')
-- 2. cast string to time via ::time
where 
	schedules.time_in::time >= '08:00:00'::time
  and
	schedules.time_out::time <= '08:30:00'::time
order by train, departure ASC;