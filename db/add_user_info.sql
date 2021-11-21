INSERT INTO user_info
(userID, name, address, city, phone_num)
VALUES
($1, $2, $3, $4, $5)

-- does the userID need to be included?

SELECT * FROM user_info
WHERE userID = $1;