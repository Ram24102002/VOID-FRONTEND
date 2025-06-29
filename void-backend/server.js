const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ Mongo error:", err));

// Sample product schema
const Product = mongoose.model("Product", new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  sizes: [String]
}));

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(PORT, () => console.log(`🚀 Server at http://localhost:${PORT}`));
