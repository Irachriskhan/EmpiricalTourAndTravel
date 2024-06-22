const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const tourRoute = require("./routes/tours.js");
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");
const reviewRoute = require("./routes/reviews.js");
const bookingRoute = require("./routes/bookings.js");

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
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

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
