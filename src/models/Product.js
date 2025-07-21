import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required."],
  },
  brand: String,
  category: {
    type: String,
    required: [true, "Product category is required."],
  },
  price: {
    type: Number,
    required: [true, "Product price is required."],
    min: [1, "Product price must be positive value."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
  stock: {
    type: Number,
    default: 1,
    select: false,
    max: [10000, "Stock items must not exceed 10000."],
  },
  imageUrls: {
    type: [String],
  },
});

const model = mongoose.model("Product", productSchema);

export default model;
