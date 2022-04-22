CREATE TABLE users
 (
id SERIAL PRIMARY KEY,
username VARCHAR(120),
hash text
 );

ALTER TABLE users
ADD COLUMN email VARCHAR(60);

INSERT INTO users
(username, hash)
VALUES
('jayyrt', 'nov292016'),
('almaromero', 'chikis1973'),
('hectorlara', 'january31');

CREATE TABLE user_info
(
userid INTEGER REFERENCES users(id) NOT NULL,
name TEXT,
address VARCHAR(200),
city VARCHAR(50),
phone_num VARCHAR(10)
CONSTRAINT chk_phone CHECK (phone_num NOT LIKE '%[^0-9]%')
);

ALTER TABLE user_info
ALTER phone_num
SET DATA TYPE VARCHAR(11);

INSERT INTO user_info
(userID, name, address, city, phone_num) 
VALUES
(7, 'Kenia Romero', '270 N 500 W', 'Heber City', 8016513633);

SELECT *
FROM users
JOIN user_info ON users.id = user_info.userID;


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

