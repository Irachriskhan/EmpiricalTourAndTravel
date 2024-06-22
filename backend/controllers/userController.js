const User = require("../models/User.js");
const asyncWrapper = require("../middleware/async.js");

// create new User
const createUser = asyncWrapper(async (req, res) => {
  const newUser = new User(req.body);
  const savedUser = await newUser.save();

  res.status(200).json({
    success: true,
    message: "Successfully created",
    data: savedUser,
  });

  // res.status(500).json({
  //   success: false,
  //   message: "Failed to create. Try again",
  // });
});

// update User
const updateUser = asyncWrapper(async (req, res) => {
  const id = req.params.id;

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { $set: req.body },
    { new: true }
  );

  res.status(200).json({
    success: true,
    message: "Successfully updated",
    data: updatedUser,
  });
  // res.status(500).json({ success: false, message: "failed to update" });
});

// delete User
const deleteUser = asyncWrapper(async (req, res) => {
  const id = req.params.id;

  await User.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    message: "Successfully deleted",
  });

  // res.status(500).json({ success: false, message: "failed to deleted" });
});

// getSingle User
const getSingleUser = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);

  res.status(200).json({
    success: true,
    message: "Successful",
    data: user,
  });
  // res.status(404).json({ success: false, message: "not found" });
});

// getAll User
const getAllUser = asyncWrapper(async (req, res) => {
  const users = await User.find({});

  res.status(200).json({
    success: true,
    message: "Successful",
    data: users,
  });
  // res.status(404).json({ success: false, message: "not found" });
});

module.exports = {
  deleteUser,
  getSingleUser,
  getAllUser,
  updateUser,
  updateUser,
};
