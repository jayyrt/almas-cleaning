INSERT INTO users
(username, email, hash)
VALUES
($1, $3, $2)
returning *;