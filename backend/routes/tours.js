const express = require("express");
const {
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} = require("../controllers/tourController.js");
// const { verifyAdmin } = require("../utils/verifyToken.js");

const router = express.Router();

// create new tour
router.post("/admin/",  createTour);//verifyAdmin,

// update tour
router.put("/admin/:id", updateTour);// verifyAdmin,

// delete tour
router.delete("/admin/:id",  deleteTour);//verifyAdmin,

// get single tour
router.get("/:id", getSingleTour);

// get all tours
router.get("/", getAllTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

module.exports = router;
