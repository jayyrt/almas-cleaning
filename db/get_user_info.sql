SELECT ui.userID, ui.name, ui.address, ui.city, ui.phone_num
FROM user_info ui
WHERE ui.userID = $1;