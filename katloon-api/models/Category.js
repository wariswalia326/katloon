const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
});

module.exports = mongoose.model("Category", categorySchema);
