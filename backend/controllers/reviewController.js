const Tour = require("../models/Tour.js");
const Review = require("../models/Review.js");
const asyncWrapper = require("../middleware/async.js");
const { createCustomError } = require("../errors/custom-errors");
const { reviewValidator } = require("../utils/validators/validators");

const createReview = asyncWrapper(async (req, res, next) => {
  const input_data = req.body;
  const { error } = reviewValidator.validate(input_data);

  if (error) {
    return res.send({ error: error.details[0].message });
  }

  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });
  const savedReview = await newReview.save();

  // after creating a new review now update the reviews array of the tour
  const review = await Tour.findByIdAndUpdate(tourId, {
    $push: { reviews: savedReview._id },
  });

  if (!review) return next(createCustomError(`No review created`, 401));

  res
    .status(200)
    .json({ success: true, message: "Review submited", data: savedReview });
});

module.exports = { createReview };
