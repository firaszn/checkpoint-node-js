const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'zighnifiras@gmail.com',
    pass: 'aczt wnga gbbh duvt',
  },
});

const mailOptions = {
  from: 'zighnifiras@gmail.com', 
  to: 'zighnif@gmail.com',   
  subject: 'Test Email',         
  text: 'This is a test email from Node.js.', 
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
