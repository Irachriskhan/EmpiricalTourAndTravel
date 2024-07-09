const express = require("express");
const {
  addSubscription,
  deleteSubscription,
} = require("../controllers/subscribeController");

const router = express.Router();
router.post("/", addSubscription);
router.patch("/:id", deleteSubscription);

module.exports = router;
