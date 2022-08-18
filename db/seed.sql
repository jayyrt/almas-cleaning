CREATE TABLE users
 (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
email VARCHAR(60) NOT NULL,
address VARCHAR(200) NOT NULL,
phone_num VARCHAR(10) NOT NULL,
CONSTRAINT chk_phone CHECK (phone_num NOT LIKE '%[^0-9]%'),
hash text
 );

CREATE TABLE inquiries
 (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
email VARCHAR(60) NOT NULL,
phone_num VARCHAR(10) NOT NULL,
CONSTRAINT chk_phone CHECK (phone_num NOT LIKE '%[^0-9]%'),
subject VARCHAR(15) NOT NULL,
message TEXT NOT NULL,
received TIMESTAMPTZ,
 )

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

