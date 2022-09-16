const bcrypt = require('bcryptjs');
require('dotenv').config();
nodemailer = require('nodemailer');
const express = require('express');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const path = require('path');
const SMTPTransport = require('nodemailer/lib/smtp-transport');
require('events').EventEmitter.defaultMaxListeners = 15;

let { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

const app = express();
app.use(express.json());

module.exports = {
    inquiry: (req, res) => {
        let smtpTransport = nodemailer.createTransport({
            service: 'smtp.mailtrap.io',
            port: 587,
            auth: {
                user: EMAIL_USERNAME,
                pass: EMAIL_PASSWORD,
            }
        });

        let inquiryEmail = {
            from: req.body.email,
            to: 'jayy.rt19@gmail.com',
            subject: req.body.subject,
            html: `<div>${req.body.name}</div>
                    <div>${req.body.phone}</div>
                    <div>${req.body.msg}</div>`
        };

        smtpTransport.sendMail(inquiryEmail, (error, response)=>{
            if(error){
                res.send(error)
            }
            else{
                res.send('success')
            }
        })
        smtpTransport.close();
        // transporter.on(inquiryEmail, function (error, info) {
        //     if (error) {
        //         console.log('Mail not sent');
        //     } else {
        //         console.log('Email sent:' + info.messageId);
        //     }
        // });
    }

};