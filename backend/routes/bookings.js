const express = require("express");
const {
  createBooking,
  getAllBooking,
  getBooking,
  getBookingByCustomer,
} = require("../controllers/bookingController.js");

// const { verifyUser, verifyAdmin } = require("../utils/verifyToken.js");

const router = express.Router();

router.post("/",  createBooking);//verifyUser,
router.get("/:id",  getBooking);//verifyUser,
router.get("/",  getAllBooking);//verifyAdmin,
router.get("/:userId",  getBookingByCustomer);//verifyUser,

module.exports = router;
