const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  category: String,
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model("Product", productSchema);
