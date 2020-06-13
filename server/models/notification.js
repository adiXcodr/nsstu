var mongoose = require("mongoose"),
  config = require("./../config/config").get(process.env.NODE_ENV);

const notificationSchema = mongoose.Schema({
  date: {
    type: Date,
    required: false
  },
  headline: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = { Notification };
