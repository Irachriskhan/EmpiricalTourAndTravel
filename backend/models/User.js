const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "John Doe",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      // required: true,
      unique: true,
    },
    country: {
      type: String,
      default: "Anonymous",
    },
    address: {
      type: String,
      default: "Anonymous",
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "avatar.png",
    },
    role: {
      type: String,
      default: "user",
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
