UPDATE user_info
SET name = $2
SET address = $3
SET city = $4
SET phone_num = $5
WHERE userID = $1;
RETURNING *;