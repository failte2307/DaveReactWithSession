const nodemailer = require('nodemailer');
const nodemailMailgun = require('nodemailer-mailgun-transport');

//Step 1
const auth = {
    auth: {
        api_key: '3b4151aa3752c20476a69bab055c45e9-e566273b-5fc2d29a',
        domain: 'sandboxcd69aad8496a43089ea605b3eb048883.mailgun.org'
    }
};

//Step 2
let transporter = nodemailer.createTransport(nodemailMailgun(auth));

// Step 3
const mailOptions = {
    from: 'Failte JRI-America <failte@jri-america.com>',
    to: 'conobr97@gmail.com', //this will be replaced by the email associated with the employee being selected
    subject: 'JRI-America - Failte - You have a visitor!',
    text: 'this is the message you are going to receive' //this will be replaced by the message being submitted by the user
};

//Step 4
transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
        console.log('Error: ', err);
    } else {
        console.log('Message sent!!!!');
    }
});
