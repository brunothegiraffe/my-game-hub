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

-- create table game(
--     id serial primary key,
--     user_id INTEGER references users,
--     title text not null,
--     img text
-- )
