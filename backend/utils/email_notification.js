const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

const mailOptions = function (reciever, topic, message) {
  return {
    to: reciever,
    from: process.env.EMAIL_USERNAME,
    subject: topic,
    text: message,
  };
};

module.exports = { transporter, mailOptions };
