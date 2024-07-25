const express = require("express");
const {
  archiveUser,
  getAllUser,
  getSingleUser,
  updateUser,
} = require("../controllers/userController.js");
const router = express.Router();

const { verifyAdmin, verifyUser } = require("../utils/verifyToken.js");

// update User
router.patch("/:id", verifyUser, updateUser);

// delete User
router.patch("/:id/delete", verifyUser, archiveUser);

// get single User
router.get("/:id", verifyUser, getSingleUser);

// get all Users
router.get("/", verifyAdmin, getAllUser);

module.exports = router;
