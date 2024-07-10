const express = require("express");
const {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} = require("../controllers/userController.js");
const router = express.Router();

// const { verifyAdmin, verifyUser } = require("../utils/verifyToken.js");

// update User
router.patch("/:id", updateUser);// verifyUser,

// delete User
router.delete("/:id", deleteUser);// verifyUser,

// get single User
router.get("/:id", getSingleUser);// verifyUser,

// get all Users
router.get("/",  getAllUser);//verifyAdmin,

module.exports = router;
