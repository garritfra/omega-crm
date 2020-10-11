const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: { type: String, required: true },
  full_name: { type: String },
  clients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
  ],
});

module.exports = mongoose.model("User", schema);
