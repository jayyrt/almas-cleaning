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

CREATE TABLE user_info
(
userID INTEGER REFERENCES users(id),
name TEXT,
address VARCHAR(200),
city VARCHAR(50),
phone_num INTEGER
);


CREATE TABLE calendar
(
id SERIAL PRIMARY KEY,
weekday TEXT,
morning BOOLEAN,
noon BOOLEAN,
mid_afternoon BOOLEAN,
last_time BOOLEAN
);

INSERT INTO calendar
(weekday, morning, noon, mid_afternoon, last_time)
VALUES
('Monday', TRUE, TRUE, TRUE, TRUE),
('Tuesday', TRUE, TRUE, TRUE, TRUE),
('Wednesday', TRUE, TRUE, TRUE, TRUE),
('Thursday', TRUE, TRUE, TRUE, TRUE),
('Friday', TRUE, TRUE, TRUE, TRUE),
('Saturday', TRUE, TRUE, TRUE, TRUE);

