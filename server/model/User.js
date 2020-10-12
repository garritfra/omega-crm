const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: { type: String, required: true },
  full_name: { type: String },
  password: { type: String, required: true, min: 8 },
  date_created: {
    type: Date,
    default: Date.now(),
  },
  clients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
  ],
});

module.exports = mongoose.model("User", schema);
