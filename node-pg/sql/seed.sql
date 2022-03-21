INSERT INTO users (username, email)
VALUES
  ('albert', 'albert@mail.com'),
  ('felix', 'felix@mail.com'),
  ('wally', 'wally@mail.com'),
  ('beatrice', 'beatrice@mail.com'),
  ('darla', 'darla@mail.com');

INSERT INTO posts (content, user_id)
VALUES
  ('welcome to my post! im albert :)', 1);

INSERT INTO users (username, email)
VALUES
  ('albert', 'otherAlbert@mail.com')
ON CONFLICT DO NOTHING;