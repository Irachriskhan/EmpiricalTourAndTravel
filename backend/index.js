const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const tourRoute = require("./routes/tours");
const tourPackageRoute = require("./routes/tour_packages");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const reviewRoute = require("./routes/reviews");
const bookingRoute = require("./routes/bookings");
const subscriptionRoute = require("./routes/subscription");
const contactusRoute = require("./routes/contactus");

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const corsOptions = {
  origin: true,
  credentials: true,
};

//database connection
mongoose.set("strictQuery", false);

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(fileUpload());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/tour-packages", tourPackageRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);
app.use("/api/v1/subscribe", subscriptionRoute);
app.use("/api/v1/contactus", contactusRoute);

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async (req, res, next) => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`
      EmpiricalTourAndTravel app is accessible on  http://localhost:${port}
      or https://empiricaltourandtravel.onrender.com
      `);
  });
};

start();
