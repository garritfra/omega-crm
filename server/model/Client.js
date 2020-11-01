const mongoose = require("mongoose");

const event = new mongoose.Schema(
  {
    eventType: {
      type: String,
      required: true,
      enum: ["status_changed", "created"],
    },
    value: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  events: {
    type: [event],
    default: [],
  },
  address: { type: String },
  telephone: { type: String },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Client = mongoose.model("Client", schema);

module.exports = Client;
