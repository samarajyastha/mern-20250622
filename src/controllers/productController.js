import productService from "../services/productService.js";

const getProducts = (req, res) => {
  // Request query
  const products = productService.getProducts(req.query);

  res.status(200).json(products);
};

const getProductById = (req, res) => {
  // Request params
  const id = req.params.id;

  const product = productService.getProductById(id);

  res.json(product);
};

const createProduct = (req, res) => {
  productService.createProduct(req.body);

  res.status(201).send("Product created successfully.");
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
