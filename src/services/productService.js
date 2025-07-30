import Product from "../models/Product.js";

const getProducts = async (query) => {
  const { brands, category, min, max, limit, name, offset } = query;

  const sort = JSON.parse(query.sort || "{}");
  const filters = {};

  if (brands) filters.brand = { $in: brands.split(",") };
  if (category) filters.category = category;
  if (min) filters.price = { $gte: min };
  if (max) filters.price = { ...filters.price, $lte: max };
  if (name) filters.name = { $regex: name, $options: "i" };

  const products = await Product.find(filters)
    .sort(sort)
    .limit(limit)
    .skip(offset);

  return products;
};

const getProductById = async (id) => {
  const product = await Product.findById(id);

  if (!product) {
    throw {
      statusCode: 404,
      message: "Product not found.",
    };
  }

  return product;
};

const createProduct = async (data, createdBy) => {
  const createdProduct = await Product.create({
    ...data,
    createdBy,
  });

  return createdProduct;
};

const updateProduct = async (id, data, userId) => {
  const product = await getProductById(id);

  if (product.createdBy != userId) {
    throw {
      statusCode: 403,
      message: "Access denied.",
    };
  }

  const updatedProduct = await Product.findByIdAndUpdate(id, data, {
    new: true,
  });

  return updatedProduct;
};

const deleteProduct = async (id, userId) => {
  const product = await getProductById(id);

  if (product.createdBy != userId) {
    throw {
      statusCode: 403,
      message: "Access denied.",
    };
  }

  await Product.findByIdAndDelete(id);
};

export default {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
