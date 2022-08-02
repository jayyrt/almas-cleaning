INSERT INTO users
(name, email, address, phone_num, hash)
VALUES
($1, $2, $3, $4, $5)
returning *;