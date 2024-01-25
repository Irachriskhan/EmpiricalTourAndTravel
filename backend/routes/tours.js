import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  updateTour,
} from "../controllers/tourController.js";

const router = express.Router();

//create new router
router.post("/", createTour);

//update router
router.put("/:id", updateTour);

//delete router
router.delete("/:id", deleteTour);

//getSingle router
router.get("/:id", getSingleTour);

//getAll router
router.get("/", getAllTour);

export default router;
