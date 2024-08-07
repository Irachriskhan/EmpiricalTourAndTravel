const { createCustomError } = require("../errors/custom-errors");
const asyncWrapper = require("../middleware/async");
const Contactus = require("../models/Contactus");
const { contactusValidator } = require("../utils/validators/validators");

const sendMessage = asyncWrapper(async (req, res, next) => {
  const input_data = req.body;
  const { error } = contactusValidator.validate(input_data);
  if (error)
    return res
      .status(422)
      .json({ message: "Validation error", error: error.details[0].message });

  const newMessage = await Contactus.create(req.body);
  if (!newMessage)
    return next(createCustomError(`Failed to send the message`, 400));

  res.status(201).json({
    success: true,
    message: "Message sent successfully",
    data: newMessage,
  });
});

module.exports = { sendMessage };
