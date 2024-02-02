const express = require("express");
const {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} = require("../controllers/userController.js");
const router = express.Router();

const { verifyAdmin, verifyUser } = require("../utils/verifyToken.js");

// update User
router.put("/:id", verifyUser, updateUser);

// delete User
router.delete("/:id", verifyUser, deleteUser);

// get single User
router.get("/:id", verifyUser, getSingleUser);

// get all Users
router.get("/", verifyAdmin, getAllUser);

module.exports = router;
