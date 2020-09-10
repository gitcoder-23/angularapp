// const pool = require('../db/db');
const nodemailer = require('nodemailer');

module.exports = {

  sendMail(req, res) {
    // step 1 (get authenticated)
    const transporter = nodemailer.createTransport({
      service: 'yandex',
      auth: {
        user: 'test.blade@yandex.com',
        pass: '$oumitra1',
      },
    });

    let mailData = '<div style="font-family:\'Segoe UI\', Tahoma, Geneva,';
    mailData += ' Verdana, sans-serif;"></div><p style = "font-size: 30px;" >';
    mailData += ' Dear admin,</p ><p style="font-size: 20px; margin-left:50px;';
    mailData += 'margin-top:0px">someone wants to contact you from ';
    mailData += 'avona site\'s contact page</p><div style="margin-left:';
    mailData += ' 100px;"><p style="font-size: 18px;"><u>Details are</u></p>';
    mailData += '<p style="font-size: 18px;">Name : &nbsp;&nbsp;&nbsp;';
    mailData += `${req.body.name} </p>`;
    mailData += '<p style="font-size: 18px;">Email : &nbsp;&nbsp;&nbsp;';
    mailData += `${req.body.email}</p>`;
    mailData += '<p style="font-size: 18px;">Message : &nbsp;&nbsp;&nbsp;';
    mailData += `${req.body.message}</p>`;
    mailData += '</div ><p><br></p><p style="text-align: right;">';
    mailData += 'Regards , &nbsp;&nbsp;&nbsp; ';
    mailData += `${req.body.name}</p></div>`;

    // Step 2 (composing mail)
    const mailOptions = {
      from: 'test.blade@yandex.com', // TODO: email sender
      to: 'soumitra.kus@gmail.com', // TODO: email receiver deepak09@gmail.com
      subject: req.body.name,
      html: mailData,
    };

    // Step 3 (sending mail)
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        res.send(`err ${err}`);
      } else {
        res.send('Mail sent successfully');
      }
    });
  },
};
