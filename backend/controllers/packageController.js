const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-errors");
const TourPackages = require("../models/TourPackages");
const { tourPackageValidator } = require("../utils/validators/validators");

const addTourPackage = asyncWrapper(async (req, res, next) => {
  const input_data = req.body;
  const { error } = tourPackageValidator.validate(input_data);

  if (error) {
    return res
      .status(422)
      .json({ message: "Validation error", error: error.details[0].message });
  }

  const { title } = input_data;
  const packageTitle = await TourPackages.findOne({ title: title });
  if (packageTitle)
    return next(
      createCustomError(
        `Tour package with title "${title}" already  exist`,
        400
      )
    );

  const tourPackage = await TourPackages.create(input_data);
  if (!tourPackage)
    return next(createCustomError(`Failed to create the tour package`, 400));

  res.status(201).json({
    success: true,
    message: "Tour Package Successfully created",
    data: tourPackage,
  });
});

const deleteTourPackage = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const tourPackage = await TourPackages.findByIdAndDelete(id);

  if (!tourPackage)
    return next(createCustomError(`No tour package with id ${id}`, 404));

  res.status(200).json({
    success: true,
    message: "Tour Package Successfully deleted",
  });
});

const archiveTourPackage = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const { status } = req.body;
  const tourPackage = await TourPackages.findByIdAndUpdate(
    id,
    { $set: status },
    { new: true }
  );

  if (!tourPackage)
    return next(createCustomError(`No tour package with id ${id}`, 404));

  res.status(200).json({
    success: true,
    message: "Tour Package Successfully archived",
  });
});

const getSingleTourPackage = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const tourPackage = await TourPackages.findById(id).populate("reviews");

  if (!tourPackage)
    return next(createCustomError(`No Tour package with id ${id}`, 404));

  res.status(200).json({
    success: true,
    message: "Successful",
    data: tourPackage,
  });
});

const getAllTourPackages = asyncWrapper(async (req, res, next) => {
  // for pagination
  const page = parseInt(req.query.page);
  const tourPackages = await TourPackages.find({})
    .populate("reviews")
    .skip(page * 8)
    .limit(8);

  if (!tourPackages) return next(createCustomError(`No tour Found!`, 404));

  res.status(200).json({
    success: true,
    count: tourPackages.length,
    message: "Successful",
    data: tourPackages,
  });
});

const updateTourPackage = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const updatedTourPackage = await TourPackages.findByIdAndUpdate(
    id,
    {
      $set: req.body,
    },
    { new: true }
  );

  if (!updatedTourPackage)
    return next(createCustomError(`No Tour Package with id ${id}`, 404));

  res.status(200).json({
    success: true,
    message: "Tour Package Successfully updated",
    data: updatedTourPackage,
  });
});

module.exports = {
  addTourPackage,
  deleteTourPackage,
  archiveTourPackage,
  getSingleTourPackage,
  getAllTourPackages,
  updateTourPackage,
};
