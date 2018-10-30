update users set username=$2, email=$3
where id = $1;

select *
from users;
