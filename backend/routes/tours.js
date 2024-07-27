const express = require("express");
const {
  createTour,
  updateTour,
  archiveTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} = require("../controllers/tourController.js");
const { verifyAdmin } = require("../utils/verifyToken.js");

const router = express.Router();

// create new tour
router.post("/admin", verifyAdmin, createTour);
router.put("/admin/:id", verifyAdmin, updateTour);
router.patch("/admin/:id/delete", verifyAdmin, archiveTour);
router.get("/:id", getSingleTour);
router.get("/", getAllTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

module.exports = router;
