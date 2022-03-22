SELECT ui.userID, ui.name, ui.address, ui.address, ui.city, ui.phone_num
FROM user_info ui
-- add JOIN sql here !!!
-- will be joining login info with user data
WHERE userID = $1; 
-- AND auth info
