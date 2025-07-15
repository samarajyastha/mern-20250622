import productService from "../services/productService.js";

const getProducts = (req, res) => {
  const products = productService.getProducts();

  res.status(200).json(products);
};

const getProductById = (req, res) => {
  res.send("Product by id 1");
};

const createProduct = (req, res) => {
  res.send("Create a product");
};

const updateProduct = (req, res) => {
  res.send("Update a product");
};

const deleteProduct = (req, res) => {
  res.send("Delete a product");
};

export default {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
