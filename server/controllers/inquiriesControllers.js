const bcrypt = require('bcryptjs');
require('dovenv').config();
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
    inquiry: async (req, res) => {
        const email = req.body.email;

    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 587,
        secure: false,
        auth: {
            user: EMAIL_USERNAME,
            pass: EMAIL_PASSWORD,
        }
    });

    const  inquiryEmail = {
        from: {}, // get email input
        to: email,
        subject: {}, // reference subject input
        html: `<div>this is my email!</div>`
    };

    transporter.sendEmail(inquiryEmail, function(error, info){
        if (error) {
            console.log('Mail not sent');
        } else {
            console.log('Email sent:' + info.messageId);
        }
    })
    }

};