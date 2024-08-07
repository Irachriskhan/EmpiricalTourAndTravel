const express = require("express");
const {
  login,
  logout,
  register,
  resetPassword,
  updatePassword,
} = require("../controllers/authController.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.route("/reset-password").post(resetPassword).patch(updatePassword);

module.exports = router;
