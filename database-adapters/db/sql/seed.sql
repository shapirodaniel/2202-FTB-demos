insert into stations (station_name)
values ('red'), ('blue'), ('green'), ('yellow'), ('purple');

insert into tracks (track_name)
values ('A'), ('B'), ('C'), ('D'), ('E'), ('F');

insert into trains (train_name)
values ('northern_line'), ('mighty_mountains_loop'), ('sea_breeze'), ('silent_tundra'), ('central_snowland_route');

insert into routes (
  train_id, 
  station_id, 
  track_id, 
  sequence_no, 
  time_in, 
  time_out
)
values
  -- northern_line: red > blue > yellow, track A
  (1, 1, 1, 1, '08:00', '08:04'),
  (1, 2, 1, 2, '08:12', '08:16'),
  (1, 4, 1, 3, '08:28', '08:32'),
  -- might_mountains_loop: blue > green > purple, track B-C
  (2, 2, 2, 1, '08:10', '08:14'),
  (2, 3, 2, 2, '08:22', '08:26'),
  (2, 5, 3, 3, '08:34', '08:38'),
  -- sea_breeze: red > yellow, track D
  (3, 1, 4, 4, '07:56', '08:00'),
  (3, 1, 4, 2, '08:24', '08:28'),
  -- silent_tundra: yellow > blue > purple, track E-F
  (4, 4, 5, 1, '08:05', '08:09'),
  (4, 2, 6, 2, '08:16', '08:20'),
  (4, 5, 6, 3, '08:28', '08:32');