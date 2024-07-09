const User = require("../models/User");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-errors");
const { BASE_URL } = require("../utils/config");
const { hashPassword } = require("../utils/hash_password");
const nodemailer = require("nodemailer");
// const {registerValidator, loginValidator,} = require("../utils/validators/validators");

// user registration
const register = asyncWrapper(async (req, res, next) => {
  // const input_data = req.body;
  // const { error } = registerValidator.validate(input_data);
  // if (error) {
  //   return res.send({ error: error.details[0].message });
  // }

  const { username, email } = req.body;
  const currentEmail = await User.findOne({ email: email });
  if (currentEmail)
    return next(
      createCustomError(`Email is already taken. Try another email!`, 401)
    );

  const currentUser = await User.findOne({ username: username });
  if (currentUser) {
    return next(
      createCustomError(`Username is already taken. Try another username!`, 401)
    );
  }

  //hashing password
  const salt = bcrypt.genSaltSync(10);
  const hashPswd = bcrypt.hashSync(req.body.password, salt);

  const newUser = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: hashPswd,
    photo: req.body.photo,
    role: req.body.role || "user",
  });

  if (!newUser) return next(createCustomError("User not registered!", 404));

  res.status(200).json({ success: true, message: "User successfully created" });
});

// user login
const login = asyncWrapper(async (req, res, next) => {
  // const input_data = req.body;
  // const { error } = loginValidator.validate(input_data);
  // if (error) {
  //   return res.send({ error: error.details[0].message });
  // }

  const email = req.body.email;
  const user = await User.findOne({ email });

  // if user doesn't exist
  if (!user) return next(createCustomError("Invalid email address!", 401));

  // if user is exist then check password or compare the password
  const checkCorrectPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  // if password is incorrect
  if (!checkCorrectPassword)
    return next(createCustomError("You entered an Incorect password!", 401));

  const { password, role, ...rest } = user._doc;

  // create jwt token
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );

  // set token in the browser cookies and send the response to the client
  res
    .cookie("accessToken", token, {
      httpOnly: true,
      expires: token.expiresIn,
    })
    .status(200)
    .json({ token, data: { ...rest }, role });
});

const resetPassword = asyncWrapper(async (req, res, next) => {
  const { email } = req.body;
  // const myEmail = "christophetestsmycodes@gmail.com";
  // const myPassword = "23Ckhan@";
  const user = await User.findOne({ email });

  if (!user) return createCustomError(`User not found`, 404);

  const token = crypto.randomBytes(20).toString("hex");
  user.resetPasswordToken = token;
  user.resetPasswordExpires = Date.now() + 900000; //= 15 min ; 1 hour = 3600000;

  const savedData = await user.save();

  if (!savedData) return createCustomError(`Unable to reset the passord`, 401);

  const resetUrl = `${BASE_URL}/auth/reset-password?key=${token}&email=${email}`;

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

  const mailOptions = {
    to: user.email,
    from: process.env.EMAIL_USERNAME,
    subject: "Password Reset from Empirical Tour and Travel Company",
    text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
    Please click on the following link, or paste this into your browser to complete the process:\n\n
    ${resetUrl}\n\n
    If you did not request this, please ignore this email and your password will remain unchanged.\n`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.status(402).json({ Error: err });
    } else {
      res.status(200).send({
        message: "Password reset email sent",
        url: resetUrl,
      });
    }
  });

  // const subject = "Password Reset from Empirical Tour and Travel Company";
  // const body = `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
  // Please click on the following link, or paste this into your browser to complete the process:\n\n
  // ${resetUrl}\n\n
  // If you did not request this, please ignore this email and your password will remain unchanged.\n`;

  // console.log(mailOptions(user.email, subject, body));
  // transporter.sendMail(
  //   mailOptions(user.email, subject, body),
  //   function (err, data) {
  //     if (err) {
  //       res.status(402).json({ Error: err });
  //     } else {
  //       res.status(200).send({
  //         message: "Password reset email sent",
  //         url: resetUrl,
  //       });
  //     }
  //   }
  // );
});

const updatePassword = asyncWrapper(async (req, res, next) => {
  const { key, email } = req.query;
  const { password } = req.body;
  const credentials = await User.findOne({ email: email });

  if (!credentials) return res.status(401).json({ message: "User not found" });

  if (key !== credentials.resetPasswordToken)
    return next(createCustomError("Invalid token! Try again", 401));

  const expiredToken = await User.findOne({
    resetPasswordToken: key,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (expiredToken === null)
    return next(createCustomError("Your token has expired!", 404));

  // const salt = bcrypt.genSaltSync(10);
  // const hashPswd = bcrypt.hashSync(password, salt);
  const hashPswd = await hashPassword(password);
  // console.log("psd__", hashPswd);

  const updatePass = await User.findOneAndUpdate(
    { email: email },
    { password: hashPswd, resetPasswordToken: "", resetPasswordExpires: "" },
    { new: true }
  );

  if (!updatePass)
    return next(createCustomError("Failed to update the password!", 401));

  res
    .status(200)
    .json({ message: "Your password is up to date", email: email });
});

const logout = asyncWrapper(async (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "You're already Loged out",
    });
  }
  req.user = null;
  res.clearCookie("accessToken");
  res
    .status(200)
    .json({ message: "Thank you! Your are loged out and free to go" });
});

module.exports = { register, login, logout, resetPassword, updatePassword };
