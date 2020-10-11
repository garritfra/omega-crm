const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  created_by: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Client", schema);
