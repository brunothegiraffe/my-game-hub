select g.title, g.img, u.user_id
from game g
    join user_game u on u.game_id = g.id
where u.user_id = $1;