const express = require("express");
const {
  addTourPackage,
  deleteTourPackage,
  archiveTourPackage,
  getSingleTourPackage,
  getAllTourPackages,
  updateTourPackage,
} = require("../controllers/packageController");
const { verifyAdmin } = require("../utils/verifyToken.js");
const router = express.Router();

router.route("/admin").post(verifyAdmin, addTourPackage);
router.route("/admin/archive/:id").get(verifyAdmin, archiveTourPackage);
router 
  .route("/admin/:id")
  .patch(verifyAdmin, updateTourPackage)
  .delete(verifyAdmin, deleteTourPackage);
// public route
router.route("/").get(getAllTourPackages);
router.route("/:id").get(getSingleTourPackage);

module.exports = router;
