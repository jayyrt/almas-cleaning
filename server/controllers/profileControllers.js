// const bcrypt = require('bcryptjs');

module.exports = {
    getInfo: async (req, res) => {
        try {
            const userInfo = await req.app.get('db').get_user(req.params.userID); // does .params need to be used?
            return res.status(200).send(userInfo);
        } catch (e) {
            console.log(e);
            res.status(500).send('Displaying User Information Error');
        }
    },
    updateInfo: async (req, res) => {
        try {
            const { userid } = req.session.user;
            const { name, address, city, phone_num } = req.body;
            const userInfo = await req.app.get('db').add_user_info([userid, name, address, city, phone_num]);
            return res.status(200).send(userInfo);
        } catch (e) {
            console.log(e);
            res.status(500).send("Updating User Information Error")
        }
    },
}