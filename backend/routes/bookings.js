const express = require("express");
const {
  createBooking,
  getAllBooking,
  getBooking,
} = require("../controllers/bookingController.js");

const { verifyAdmin, verifyUser } = require("../utils/verifyToken.js");

const router = express.Router();

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getBooking);
router.get("/", verifyAdmin, getAllBooking);

module.exports = router;
