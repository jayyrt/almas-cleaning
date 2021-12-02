// const bcrypt = require('bcryptjs');

module.exports = {
    getInfo: async (req, res) => {
       const { userID } = req.session.user;
       const info = await req.app.get('db').get_user_info([userID]);
       return res.status(200).send(info);       
    },
    addInfo: async (req, res) => {
        const { userID } = req.session.user;
        const { name, address, city, phone_num } = req.body;
        const  userInfo = await req.app.get('db').add_user_info([userID, name, address, city, phone_num]);
        return res.status(200).send(userInfo);
    },
    updateInfo: async (req, res) => {
        const { userID } = req.session.user;
        const { name, address, city, phone_num } = req.body;
        const userInfo = await req.app.get('db').update_user([userID, name, address, city, phone_num]);
        return res.status(200).send(userInfo);
    },
}