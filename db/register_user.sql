insert into users
    (email, username, password)
values
    ($1, $2, $3);
RETURNING *;