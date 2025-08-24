import config from "@/config";
import axios from "axios";

async function getProducts() {
  return await axios.get(`${config.apiUrl}/api/products`);
}

async function getProductById(id) {
  return await axios.get(`${config.apiUrl}/api/products/${id}`);
}

export { getProducts, getProductById };
