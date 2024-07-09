const asyncWrapper = require("../middleware/async");
const Subscribe = require("../models/Subscribe");
const nodemailer = require("nodemailer");
const { createCustomError } = require("../errors/custom-errors");

const addSubscription = asyncWrapper(async (req, res, next) => {
  const { email } = req.body;
  const subscriber = await Subscribe.findOne({ email });
  if (subscriber)
    return next(createCustomError("You are already subscribed!", 404));

  const newSubscriber = await Subscribe.create({ email });
  if (!newSubscriber)
    return next(createCustomError("Something went wrong! Try again!", 500));
  res.status(200).json({ message: "Thank you for subscribing!" });
});

const deleteSubscription = asyncWrapper(async (req, res, next) => {
  const { email } = req.body;
  const subscriber = await Subscribe.findOne({ email });
  if (!subscriber)
    return next(createCustomError("You are not subscribed!", 404));

  const removeSubscriber = await Subscribe.findOneAndUpdate(
    { email: email },
    { status: "Inactive" },
    { new: true }
  );

  if (!removeSubscriber)
    return next(createCustomError("Something went wrong! Try again!", 500));
  res
    .status(200)
    .json({ message: "You will no longer receive our products news!" });
});

module.exports = { addSubscription, deleteSubscription };
