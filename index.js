const express = require('express')
const nodemailer = require('nodemailer')

const app = express();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'khesehangsamsohang004@gmail.com',
        pass: 'rtrrinepzlrlqjuq'
    }
})

var mailOptions = {
    from: 'khesehangsamsohang004@gmail.com',
    to: "samsohangkhesehang@gmail.com",
    subject: 'Sending Email using Node.js',
    html: "<h1>Welcome to</h1>"
}

transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log('Email Sent: ' + info.response)
    }
})

const port = 5000
app.listen(port, () => console.log('listening on port', port))