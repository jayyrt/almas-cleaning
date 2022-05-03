INSERT INTO user_info
(userid, name, address, city, phone_num)
VALUES
($1, $2, $3, $4, $5)
RETURNING *;
-- userid need to be added into the table & used as a Join to recall information
-- recall JOIN SQL report
