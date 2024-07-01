const Booking = require("../models/Bookings.js");
const asyncWrapper = require("../middleware/async.js");
const { createCustomError } = require("../errors/custom-errors");

const { bookingValidator } = require("../utils/validators/validators.js");

// create new booking
const createBooking = asyncWrapper(async (req, res, next) => {
  const input_data = req.body;
  const { error } = bookingValidator.validate(input_data);

  if (error) {
    return res.send({ error: error.details[0].message });
  }

  const newBooking = new Booking(input_data);
  const savedBooking = await newBooking.save();

  if (!savedBooking) return next(createCustomError(`Cannot book a tour!`, 404));

  res.status(200).json({
    success: true,
    message: "Your tour is booked",
    data: savedBooking,
  });
});

// get single booking
const getBooking = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const booking = await Booking.findById(id);

  if (!booking)
    return next(createCustomError(`No Booked tour with id ${id}`, 404));

  res.status(200).json({
    success: true,
    message: "successful",
    data: booking,
  });
});

// get all booking
const getAllBooking = asyncWrapper(async (req, res, next) => {
  const booking = await Booking.find();

  if (!booking) return next(createCustomError(`No tours Booked found!`, 404));

  res.status(200).json({
    success: true,
    message: "successful",
    data: booking,
  });
});

module.exports = { createBooking, getBooking, getAllBooking };
