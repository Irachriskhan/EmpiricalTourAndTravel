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

const userValidator = Joi.object({
  username: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z]"))
    .min(6)
    .max(30)
    .trim(),
  email: Joi.string()
    .required()
    .pattern(
      new RegExp(
        '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$'
      )
    )
    .email()
    .trim(),
  password: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
    .trim(),
  photo: Joi.string().required(),
  role: Joi.string(),
});

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

async function validationChecker(input, validator, res) {
  try {
    const { error } = validator.validate(input);

    if (!error) {
      return res.send({ error: error.details[0].message });
    }
  } catch (error) {
    res.send({ error: error.details[0].message });
  }
}

module.exports = {
  validationChecker,
  tourValidator,
  userValidator,
  bookingValidator,
  reviewValidator,
};
