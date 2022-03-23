SELECT ui.userID, ui.name, ui.address, ui.address, ui.city, ui.phone_num
FROM user_info ui
JOIN users u ON u.id = ui.userID
-- joining login info with user data
WHERE ui.userID = $1
-- does AND need to be added with auth info