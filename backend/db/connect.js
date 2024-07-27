const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      readPreference: "primary",
      authMechanism: "SCRAM",
      readPreferenceTags: { dc: "ny", rack: "r1" },
      retryWrites: true,
      retryReads: true,
    });

    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database connection failed");
  }
};

module.exports = connectDB;
