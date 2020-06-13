var mongoose = require("mongoose"),
  config = require("./../config/config").get(process.env.NODE_ENV);

const memberSchema = mongoose.Schema({
  year: {
    type: Number,
    required: false
  },
  position: {
    type: String,
    required: true,
    minlength: 6
  },
  name: {
    type: String,
    required: true,
    maxlength: 100
  },
  image: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  mobile: {
    type: Number,
    required: true,
    maxlength: 13
  },
  linkedin: {
    type: String
  }
});

const Member = mongoose.model("Member", memberSchema);

module.exports = { Member };
