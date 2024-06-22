const Booking = require("../models/Bookings.js");
const asyncWrapper = require("../middleware/async.js");

const {
  validationChecker,
  bookingValidator,
} = require("../utils/validators/validators.js");

// create new booking
const createBooking = asyncWrapper(async (req, res) => {
  const input_data = req.body;

  validationChecker(input_data, bookingValidator);

  const newBooking = new Booking(input_data);

    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });

    // res.status(500).json({
    //   success: false,
    //   message: "internal server error",
    // });
  });

// get single booking
const getBooking = asyncWrapper(async (req, res) => {
  const id = req.params.id;
    const book = await Booking.findById(id);

    res.status(200).json({
      success: true,
      massage: "successful",
      data: book,
    });
    // res.status(404).json({
    //   success: false,
    //   massage: "not found",
    // });
  });

// get all booking
const getAllBooking = asyncWrapper(async (req, res) => {
    const books = await Booking.find();

    res.status(200).json({
      success: true,
      massage: "successful",
      data: books,
    });
    // res.status(500).json({
    //   success: false,
    //   massage: "internal server error",
    // });
  });

module.exports = { createBooking, getBooking, getAllBooking };
