const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please a name"],
    },
    email: {
      type: String,
      required: [true, "Please a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please a password"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("User", userSchema);
