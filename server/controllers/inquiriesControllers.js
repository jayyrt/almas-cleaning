const bcrypt = require('bcryptjs');
require('dotenv').config();
nodemailer = require('nodemailer');
const express = require('express');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const path = require('path');
require('events').EventEmitter.defaultMaxListeners = 15;

let { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

const app = express();
app.use(express.json());

module.exports = {
    inquiry: (req, res) => {

        const transporter = nodemailer.createTransport({
            service: 'smtp.mailtrap.io',
            auth: {
                user: EMAIL_USERNAME,
                pass: EMAIL_PASSWORD,
            }
        });

        const inquiryEmail = {
            from: req.body.email,
            to: EMAIL_USERNAME,
            subject: req.body.subject,
            html: `<div>this is my email!</div>`
        };

        transporter.on(inquiryEmail, function (error, info) {
            if (error) {
                console.log('Mail not sent');
            } else {
                console.log('Email sent:' + info.messageId);
            }
        });
    }

};