const { StatusCodes } = require("http-status-codes");
const path = require("path");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-errors");

const uploadProductImage = asyncWrapper(async (req, res, next) => {
  if (!req.files) return next(createCustomError("No file image added", 403));

  let fileImage = req.files.image;
  if (!fileImage.mimetype.startsWith("image"))
    return next(createCustomError("Please upload image", 403));

  const maxSize = 1024 * 1024;
  if (fileImage.size > maxSize)
    return next(createCustomError("Upload an image less than 1Mb", 403));

  const imagePath = path.join(
    __dirname,
    "../uploads/" + `${productImage.name}`
  ); // determine the destination folder

  const uploadedImage = await fileImage.mv(imagePath); // saving the imageoductImage
  if (!uploadedImage)
    return next(
      createCustomError(`Failed to upload the image! Try again!`, 400)
    );
  return res
    .status(200)
    .json({
      message: "Image Uploaded",
      image: { src: `/uploads/${fileImage.name}` },
    });
});

module.exports = { uploadProductImage };
