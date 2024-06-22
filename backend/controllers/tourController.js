const Tour = require("../models/Tour.js");
const asyncWrapper = require("../middleware/async.js");

const {
  validationChecker,
  tourValidator,
} = require("../utils/validators/validators.js");

// create new tour
const createTour = asyncWrapper(async (req, res) => {
  const input_data = req.body;

  validationChecker(input_data, tourValidator, res);
  const newTour = new Tour(input_data);
  const savedTour = await newTour.save();

  res.status(200).json({
    success: true,
    message: "Successfully created",
    data: savedTour,
  });
  // res.status(500).json({
  //   success: false,
  //   error: err.message,
  //   // message: "Failed to create a tour. Please try again",
  // });
});

// update tour
const updateTour = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const updatedTour = await Tour.findByIdAndUpdate(
    id,
    {
      $set: req.body,
    },
    { new: true }
  );

  res.status(200).json({
    success: true,
    message: "Successfully updated",
    data: updatedTour,
  });
  // res.status(500).json({ success: false, message: "failed to update" });
});

// delete tour
const deleteTour = asyncWrapper(async (req, res) => {
  const id = req.params.id;

  await Tour.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    message: "Successfully deleted",
  });
  // res.status(500).json({ success: false, message: "failed to deleted" });
});

// getSingle tour
const getSingleTour = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const tour = await Tour.findById(id).populate("reviews");

  res.status(200).json({
    success: true,
    message: "Successful",
    data: tour,
  });
  // res.status(404).json({ success: false, message: "not found" });
});

// getAll tour
const getAllTour = asyncWrapper(async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);
  const tours = await Tour.find({})
    .populate("reviews")
    .skip(page * 8)
    .limit(8);

  res.status(200).json({
    success: true,
    count: tours.length,
    message: "Successful",
    data: tours,
  });
  // res.status(404).json({ success: false, message: "not found" });
});

// get tour by search
const getTourBySearch = asyncWrapper(async (req, res) => {
  // here 'i' means case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  // gte means greater than equal
  const tours = await Tour.find({
    city,
    distance: { $gte: distance },
    maxGroupSize: { $gte: maxGroupSize },
  });

  res.status(200).json({
    success: true,
    message: "Successful",
    data: tours,
  });
  // res.status(404).json({ success: false, message: "not found" });
});

// get featured tour
const getFeaturedTour = asyncWrapper(async (req, res) => {
  const tours = await Tour.find({ featured: true })
    .populate("reviews")
    .limit(8);

  res.status(200).json({
    success: true,
    message: "Successful",
    data: tours,
  });
  // res.status(404).json({ success: false, message: "not found" });
});

// get tour counts
const getTourCount = asyncWrapper(async (req, res) => {
  const tourCount = await Tour.estimatedDocumentCount();

  res.status(200).json({ success: true, data: tourCount });
  // res.status(500).json({ success: false, message: "failed to fetch" });
});

module.exports = {
  getTourCount,
  getFeaturedTour,
  getTourBySearch,
  getAllTour,
  getSingleTour,
  deleteTour,
  updateTour,
  createTour,
};
