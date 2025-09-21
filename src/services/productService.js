import { PRODUCT_DESCRIPTION_PROMPT } from "../constants/prompt.js";
import { ADMIN } from "../constants/roles.js";
import Product from "../models/Product.js";
import uploadFile from "../utils/file.js";
import promptGemini from "../utils/gemini.js";

const createProduct = async (data, files, createdBy) => {
  const uploadedFiles = await uploadFile(files);

  const promptMessage = PRODUCT_DESCRIPTION_PROMPT.replace("%s", data.name)
    .replace("%s", data.brand)
    .replace("%s", data.category);

  const description = data.description ?? (await promptGemini(promptMessage));

  const createdProduct = await Product.create({
    ...data,
    createdBy,
    imageUrls: uploadedFiles.map((item) => item?.url),
    description,
  });

  return createdProduct;
};

const deleteProduct = async (id, user) => {
  const product = await getProductById(id);

  if (product.createdBy != user._id && !user.roles.includes(ADMIN)) {
    throw {
      statusCode: 403,
      message: "Access denied.",
    };
  }

  await Product.findByIdAndDelete(id);
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

const getProducts = async (query) => {
  const { brands, category, min, max, limit, name, offset, createdBy } = query;

  const sort = JSON.parse(query.sort || "{}");
  const filters = {};

  if (brands) filters.brand = { $in: brands.split(",") };
  if (category) filters.category = category;
  if (min) filters.price = { $gte: min };
  if (max) filters.price = { ...filters.price, $lte: max };
  if (name) filters.name = { $regex: name, $options: "i" };

  if (createdBy) filters.createdBy = createdBy;

  const products = await Product.find(filters)
    .sort(sort)
    .limit(limit)
    .skip(offset);

  return products;
};

const updateProduct = async (id, data, files, user) => {
  const product = await getProductById(id);

  if (product.createdBy != user._id && !user.roles.includes(ADMIN)) {
    throw {
      statusCode: 403,
      message: "Access denied.",
    };
  }

  const updateData = data;

  if (files && files.length > 0) {
    const uploadedFiles = await uploadFile(files);
    updateData.imageUrls = uploadedFiles.map((item) => item?.url);
  }

  const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
    new: true,
  });

  return updatedProduct;
};

const getBrands = async () => {
  return await Product.distinct("brand");
};

const getCount = async () => {
  return await Product.countDocuments();
};

const getCategories = async () => {
  return await Product.distinct("category");
};

export default {
  createProduct,
  deleteProduct,
  getBrands,
  getCount,
  getCategories,
  getProductById,
  getProducts,
  updateProduct,
};
