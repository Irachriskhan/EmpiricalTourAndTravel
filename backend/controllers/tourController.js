const Tour = require("../models/Tour.js");
const asyncWrapper = require("../middleware/async.js");
const { createCustomError } = require("../errors/custom-errors");

const { tourValidator } = require("../utils/validators/validators.js");

// create new tour
const createTour = asyncWrapper(async (req, res, next) => {
  const input_data = req.body;
  const { error } = tourValidator.validate(input_data);

  if (error) {
    return res.status(422).send({ error: error.details[0].message });
  }
  const { title } = req.body;
  const tourTitle = await Tour.findOne({ title: title });
  if (tourTitle)
    return next(
      createCustomError(`Tour with title "${title}" already  exist`, 422)
    );

  const newTour = await Tour.create(input_data);

  if (!newTour) return next(createCustomError(`Failed to create a tour`, 404));

  res.status(200).json({
    success: true,
    message: "Successfully created",
    data: newTour,
  });
});

// update tour
const updateTour = asyncWrapper(async (req, res, next) => {
  const input_data = req.body;
  const { error } = tourValidator.validate(input_data);

  if (error) {
    return res.send({ error: error.details[0].message });
  }
  const id = req.params.id;
  const updatedTour = await Tour.findByIdAndUpdate(
    id,
    {
      $set: req.body,
    },
    { new: true }
  );

  if (!updateTour) return next(createCustomError(`No tour with id ${id}`, 404));

  res.status(200).json({
    success: true,
    message: "Successfully updated",
    data: updatedTour,
  });
});

// delete tour
const archiveTour = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const { status } = req.body;
  const tour = await Tour.findByIdAndUpdate(
    id,
    { $set: status },
    { new: true }
  );

  if (!tour) return next(createCustomError(`No tour with id ${id}`, 404));

  res.status(200).json({
    success: true,
    message: "Successfully deleted",
  });
});

// getSingle tour
const getSingleTour = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const tour = await Tour.findById(id).populate("reviews");

  if (!tour) return next(createCustomError(`No tour with id ${id}`, 404));

  res.status(200).json({
    success: true,
    message: "Successful",
    data: tour,
  });
});

// getAll tour
const getAllTour = asyncWrapper(async (req, res, next) => {
  // for pagination
  const page = parseInt(req.query.page);
  const tours = await Tour.find({})
    .populate("reviews")
    .skip(page * 8)
    .limit(8);

  if (!tours) return next(createCustomError(`No tour Found!`, 404));

  res.status(200).json({
    success: true,
    count: tours.length,
    message: "Successful",
    data: tours,
  });
});

// get tour by search
const getTourBySearch = asyncWrapper(async (req, res, next) => {
  // here 'i' means case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  // gte means greater than or equal
  const tours = await Tour.find({
    city,
    distance: { $gte: distance },
    maxGroupSize: { $gte: maxGroupSize },
  });

  if (!tours) return next(createCustomError(`No tour Found!`, 404));

  res.status(200).json({
    success: true,
    message: "Successful",
    data: tours,
  });
});

// get featured tour
const getFeaturedTour = asyncWrapper(async (req, res, next) => {
  const tours = await Tour.find({ featured: true })
    .populate("reviews")
    .limit(8);

  if (!tours) return next(createCustomError(`No tour Found!`, 404));

  res.status(200).json({
    success: true,
    message: "Successful",
    data: tours,
  });
});

// get tour counts
const getTourCount = asyncWrapper(async (req, res, next) => {
  const tourCount = await Tour.estimatedDocumentCount();

  if (!tourCount) return next(createCustomError(`Failed to fetch!`, 404));

  res.status(200).json({ success: true, data: tourCount });
});

module.exports = {
  getTourCount,
  getFeaturedTour,
  getTourBySearch,
  getAllTour,
  getSingleTour,
  archiveTour,
  updateTour,
  createTour,
};
