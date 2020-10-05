const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: { type: String, required: true },
  full_name: { type: String },
  customers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
  ],
});

module.exports = mongoose.model("User", schema);
