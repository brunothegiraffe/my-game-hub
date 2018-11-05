-- CREATE TABLE "session" (
--   "sid" varchar NOT NULL COLLATE "default",
--     "sess" json NOT NULL,
--     "expire" timestamp(6) NOT NULL
-- )
-- WITH (OIDS=FALSE);
-- ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

-- CREATE TABLE "users" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR(30) UNIQUE NOT NULL,
--     "email" VARCHAR(30) UNIQUE NOT NULL,
--     "password" VARCHAR NOT NULL,
--     "avatar" TEXT
-- );

-- update users set username='newname', email='new@name.com'
-- where id = 2;

-- CREATE TABLE game(
--     id SERIAL PRIMARY KEY,
--     title varchar(250) not null UNIQUE,
--     img text
-- );

-- create table user_game(
--     user_id INT REFERENCES users,
--     game_id INT REFERENCES game
-- )

-- select u.username, u.avatar, g.name
-- from users u
-- join game g on u.id = g.owner_id;

