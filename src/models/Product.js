import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  brand: String,
  category: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const model = mongoose.model("Product", productSchema);

export default model;
