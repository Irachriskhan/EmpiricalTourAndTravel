const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    default: "Active",
  },
});

module.exports = mongoose.model("Subscribe", subscribeSchema);
