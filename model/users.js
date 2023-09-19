const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    unique: true,
    required: true,
    validate: {
      validator: (p) => {
        p.length === 10;
      },
      message: "Phone number must be of 10 digits",
    },
  },

  is_number_verified: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
