const mongoose = require("mongoose");

const productCarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

const ProductCar = mongoose.model("ProductCar", productCarSchema);
module.exports = ProductCar;
