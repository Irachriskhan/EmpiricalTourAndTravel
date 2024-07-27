const User = require("../models/User.js");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-errors");
const { userValidator } = require("../utils/validators/validators.js");

// create new User
// const createUser = asyncWrapper(async (req, res, next) => {
//   const user = await User.create(req.body);

//   if (!user)
//     return next(createCustomError(`Failed to create user. Try again!`, 401));

//   res.status(200).json({
//     success: true,
//     message: "Successfully created",
//     data: savedUser,
//   });
// });

// update User
const updateUser = asyncWrapper(async (req, res, next) => {
  // const input_data = req.body;
  // const { error } = userValidator.validate(input_data);

  // if (error) {
  //   return res.send({ error: error.details[0].message });
  // }

  const id = req.params.id;
  const updates = req.body;

  // Remove email and username from updates
  delete updates.email;
  delete updates.username;
  delete updates.password;

  const user = await User.findByIdAndUpdate(
    id,
    { $set: updates },
    { new: true }
  );

  if (!user) return next(createCustomError(`No user with id ${id} `, 404));

  res.status(200).json({
    success: true,
    message: "Successfully updated",
    data: user,
  });
});

// delete User
const archiveUser = asyncWrapper(async (req, res, next) => {
  const { status } = req.body;
  const id = req.params.id;
  const user = await User.findByIdAndUpdate(
    id,
    {
      $set: status,
    },
    { new: true }
  );

  if (!user) return next(createCustomError(`No user with id ${id} `, 404));

  res.status(200).json({
    success: true,
    message: "Successfully deleted",
  });
});

// getSingle User
const getSingleUser = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(id);

  if (!user) return next(createCustomError(`No user with id ${id} `, 404));

  res.status(200).json({
    success: true,
    message: "Successful",
    data: user,
  });
});

// getAll User
const getAllUser = asyncWrapper(async (req, res) => {
  const users = await User.find();

  if (!users) return next(createCustomError(`No user found! `, 404));

  let sortedUsers = [];
  for (let user of users) {
    if (user.role !== "admin") sortedUsers.push(user);
  }

  res.status(200).json({
    success: true,
    message: "Successful",
    data: sortedUsers,
  });
});

module.exports = {
  archiveUser,
  getSingleUser,
  getAllUser,
  updateUser,
};
