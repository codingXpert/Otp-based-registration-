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
});

const sendOtp = mongoose.model("sendOtp", sendOtpSchema);
module.exports = sendOtp;
