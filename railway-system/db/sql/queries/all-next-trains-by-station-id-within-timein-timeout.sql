-- $1: train_id
-- $2: time_in
-- $3: time_out
with schedules as (
	select 
		schedules.id,
		schedules.station_id,
		schedules.sequence_no,
		schedules.time_in,
		schedules.time_out, 
    schedules.train_id,
		trains.train_name, 
		tracks.track_name
	from schedules
	join trains on trains.id = schedules.train_id
	join tracks on tracks.id = schedules.track_id
	join stations on stations.id = schedules.station_id
) 
select 
  schedules.train_id as train_id,
	schedules.train_name as train,
	schedules.track_name as track,
	schedules.time_in as arrival,
	schedules.time_out as departure
from schedules
where 
	schedules.station_id = $1
	and
	schedules.time_in::time >= $2::time
  and
	schedules.time_out::time <= $3::time
order by train, departure ASC;