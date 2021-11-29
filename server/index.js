require('dotenv').config();
const express = require('express')
const session = require('express-session');
const massive = require('massive');
const authCtrl = require('./controllers/authControllers');
const profileCtrl = require('./controllers/profileControllers')

const PORT = 3001;

const app = express();

app.use(express.json());

const { CONNECTION_STRING, SESSION_SECRET } = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('db connected');
});

app.use(
    session({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: false,
    })
);

app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/auth/logout', authCtrl.logout);
app.get('/auth/user-info', profileCtrl.getInfo);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));