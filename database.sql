CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; 
CREATE DATABASE jwttutorial;
 CREATE TABLE users (
      user_id uuid PRIMARY KEY DEFAULT uuid_generate-v4(),
       user_name TEXT NOT NULL,
       user_email text not null,
       user_password text not null
       ); 

 SELECT * from users;
 INSERT into users (user_name, user_email, user_password) values ('Bob', 'bob@email.com', 'bob');

 --psql -U postgres
 --\c jwttutorial
 --\dt 
 --heroku pg:psql