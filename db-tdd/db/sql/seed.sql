insert into users (username, password)
values 
  ('albert', '123'),    -- id = 1
  ('felix', '123'),     -- id = 2
  ('wally', '123'),     -- etc.
  ('beatrice', '123');

insert into posts (user_id, content)
values
  (1, 'welcome to my blog!'),
  (1, 'this is my second post!'),
  (2, 'welcome to my blog, it''s awesome!'),
  (3, 'i love turtles!');