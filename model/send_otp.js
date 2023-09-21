const mongoose = require("mongoose");

const sendOtpSchema = new mongoose.Schema({
  phone: {
    type: Number,
    unique: true,
    required: true,
  },

  otp: {
    type: String,
    required: true,
  },

  // auto deleting the otp after 5 minutes(300 seconds)
  createdAt: {
    type: Date,
    default: Date.now,
    index: { expires: 300 }
  }
});

const sendOtp = mongoose.model("sendOtp", sendOtpSchema);
module.exports = sendOtp;
