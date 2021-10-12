require('dotenv').config();
const express = require('express')
const session = require('express-session');
const massive = require('massive');
const authCtrl = require('./controllers/authControllers');

const PORT = 4000;

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

app.post('/auth/register', authCtrl.register)

app.listen(PORT, () => console.log(`Listening on ${PORT}`));