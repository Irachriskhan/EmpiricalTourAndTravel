const Joi = require("joi");
const express = require("express");
express();

const tourValidator = Joi.object({
  title: Joi.string().required().pattern(new RegExp("^[a-zA-Z]")).trim(),
  city: Joi.string().required(),
  address: Joi.string().required(),
  distance: Joi.number(),
  photo: Joi.string().required(),
  desc: Joi.string().required(),
  maxGroupSize: Joi.number().integer().min(1).required(),
  reviews: Joi.array(),
  featured: Joi.boolean(),
});

const registerValidator = Joi.object({
  username: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z]"))
    .min(6)
    .max(30)
    .trim(),
  email: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"))
    .email()
    .trim(),
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/
      )
    )
    .required(),
  photo: Joi.string(),
  role: Joi.string(),
});

const loginValidator = Joi.object({
  email: Joi.string().required().email().trim(),
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/
      )
    )
    .required(),
});
// .pattern(new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"))

const bookingValidator = Joi.object({
  userId: Joi.string().alphanum().required(),
  userEmail: Joi.string().email().required().min(10).max(50),
  tourName: Joi.string().required(),
  fullName: Joi.string().required(),
  guestSize: Joi.number().integer().required().min(1),
  phone: Joi.string().required().min(10).max(15),
  bookAt: Joi.date().required().min("now"), // `${new Date().getDate()}-${ new Date().getMonth() + 1}-${new Date().getFullYear()}`
});

const reviewValidator = Joi.object({
  productId: Joi.string().required(),
  username: Joi.string().required(),
  reviewText: Joi.string().required(),
  rating: Joi.number().integer().required(),
});

// const profileValidator = Joi.object({});
// const tourPackageValidator = Joi.object({});

// async function validationChecker(input, validator) {
//   const { error } = validator.validate(input);

//   if (error) {
//     return res.send({ error: error.details[0].message });
//   }
// }

module.exports = {
  tourValidator,
  registerValidator,
  bookingValidator,
  reviewValidator,
  loginValidator,
};
