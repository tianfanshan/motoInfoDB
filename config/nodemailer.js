const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth:{
        user:'tianfanshantest@gmail.com',
        pass:'6789012Xxx'
    }
})

module.exports = transporter