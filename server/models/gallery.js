var mongoose = require("mongoose");

const gallerySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 300
  },
  image: {
    type: String,
    required: true
  }
});

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = { Gallery };
