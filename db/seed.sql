CREATE TABLE users
 (
id SERIAL PRIMARY KEY,
username VARCHAR(120),
hash text
 );

INSERT INTO users
(username, hash)
VALUES
('jayyrt', 'nov292016'),
('almaromero', 'chikis1973'),
('hectorlara', 'january31');

