var mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 100
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = { Event };
