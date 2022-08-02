const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const { name, email, address, phone, password  } = req.body;
        const db = req.app.get('db');
        const result = await db.get_user([email]);
        const existingUser = result[0];
        if (existingUser) {
            return res.status(409).send('email taken');
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const registeredUser = await db.register_user([name, email, address, phone, hash,]);
        const user = registeredUser[0];
        req.session.user = { id: user.id, name: user.name, email: user.email, address: user.address, phone: user.phone };
        return res.status(201).send(req.session.user);
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        const foundUser = await req.app.get('db').get_user([email]);
        const user = foundUser[0];
        if(!user) {
            return res.status(401).send('User not found. Please register as a new user before logging in.')
        }
        const isAuthenticated = bcrypt.compareSync(password, user.hash); 

        if(!isAuthenticated) {
            return res.status(403).send('Incorrect password');
        }
        req.session.user = { id: user.id, email: user.email };
        res.status(200).send(req.session.user);
    },
    logout: async (req, res) => {
        req.session.destroy();
        res.redirect('http://localhost:3000')
    },
    getUser: async (req, res) => {
        const user = req.session.user;
        if (user) {
            res.status(200).send(user);
        } else {
            res.sendStatus(404);
        }
    },
    usersOnly: async (req, res, next) => {
        if (!req.session.user) {
            return res.status(401).send('Please log in');
        }
        next();
    },
    // add usersOnly to require login for creating calendar events -- reference breezy-paradise
};