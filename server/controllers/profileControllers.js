const bcrypt = require('bcryptjs');

module.exports = {
    getInfo: async (req, res) => {
       const info = await req.app.get('db').get_user_info(1);
       return res.status(200).send(info);       
    },
    addInfo: async (req, res) => {
        
    },
}