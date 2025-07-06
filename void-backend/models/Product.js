const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  image: String,
  rating: Number,
  reviews: String,
  originalPrice: String,
  currentPrice: String,
  discount: String,
  offerPrice: String,
  isBestseller: Boolean,
});

module.exports = mongoose.model("Product", productSchema);
