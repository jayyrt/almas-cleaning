INSERT INTO user_info
(userid, name, address, city, phone_num)
VALUES
($1, $2, $3, $4, $5)
RETURNING *;
-- does the userID need to be included?
