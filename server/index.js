require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');
const authCtrl = require('./controllers/authControllers');
const profileCtrl = require('./controllers/profileControllers');
const inquiryCtrl = require('./controllers/inquiriesControllers');

const PORT = 4005;

// app.use(cors());

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
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

//Auth Endpoints
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.usersOnly, authCtrl.login);
app.get('/auth/logout', authCtrl.logout);
app.get('/auth/user', authCtrl.usersOnly, authCtrl.getUser);

//Profile Endpoints
app.get('/auth/user-info/:id', authCtrl.usersOnly, profileCtrl.getInfo);
app.post('/auth/user-info/:id', authCtrl.usersOnly, profileCtrl.updateInfo);

app.get('/inquiry'); 
app.post('/api/inquiry', inquiryCtrl.inquiry);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));