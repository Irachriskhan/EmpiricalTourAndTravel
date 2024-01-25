import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "Sucessdully created",
      data: savedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. try again" });
  }
};

//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updateTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};
//delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteTour = await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

//getSingle tour
export const getSingleTour = async (req, res) => {
  try {
  } catch (error) {}
};
//getAll tour
export const getAllTour = async (req, res) => {
  try {
  } catch (error) {}
};
