require("dotenv").config();
import nodeMailer from "nodemailer";

let adminEmail = process.env.MAIL_USER;
let adminPassowrd = process.env.MAIL_PASSWORD;
let adminHost = process.env.MAIL_HOST;
let adminPort = process.env.MAIL_PORT;

let sendMail = (to, subject, htmlContent) => {
  let transporter = nodeMailer.createTransport({
    host: adminHost,
    port: adminPort,
    secure: false, // user SSL - TLS
    auth: {
      user: adminEmail,
      pass: adminPassowrd
    }
  });

  let options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent
  };

  return transporter.sendMail(options); // this default return a promise
};

module.exports = sendMail;