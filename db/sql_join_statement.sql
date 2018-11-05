select u.username, u.avatar, g.name
from users u
    join game g on u.$1 = g.$2;