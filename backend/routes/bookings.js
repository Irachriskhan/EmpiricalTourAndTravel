const express = require("express");
const {
  createBooking,
  getAllBooking,
  getBooking,
  getBookingByCustomer,
} = require("../controllers/bookingController.js");

const { verifyUser, verifyAdmin } = require("../utils/verifyToken.js");

const router = express.Router();

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getBooking);
router.get("/", verifyAdmin, getAllBooking);
router.get("/:userId", verifyUser, getBookingByCustomer);

module.exports = router;
