import api from "./api";
import axios from "axios";
import config from "@/config";
import formatParams from "@/helpers/formatParams";

async function createProduct(data) {
  return await api.post(`/api/products`, data);
}

async function deleteProduct(id) {
  return await api.delete(`/api/products/${id}`);
}

async function getProducts(searchParams) {
  const query = formatParams(searchParams);

  return await axios.get(`${config.apiUrl}/api/products?${query}`);
}

async function getProductsCount() {
  return await axios.get(`${config.apiUrl}/api/products/count`);
}

async function getProductById(id) {
  return await axios.get(`${config.apiUrl}/api/products/${id}`);
}

async function updateProduct(id, data) {
  return await api.put(`/api/products/${id}`, data);
}

async function getBrands() {
  return await axios.get(`${config.apiUrl}/api/products/brands`);
}

async function getCategories() {
  return await axios.get(`${config.apiUrl}/api/products/categories`);
}

export {
  createProduct,
  deleteProduct,
  getProducts,
  getProductsCount,
  getProductById,
  updateProduct,
  getBrands,
  getCategories,
};
