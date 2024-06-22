const Tour = require("../models/Tour.js");
const Review = require("../models/Review.js");
const asyncWrapper = require("../middleware/async.js");

const createReview = asyncWrapper(async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });
    const savedReview = await newReview.save();

    // after creating a new review now update the reviews array of the tour
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    res
      .status(200)
      .json({ success: true, message: "Review submited", data: savedReview });
    // res.status(500).json({
    //   success: false,
    //   message: "failed to submite",
    // });
  });

module.exports = { createReview };
