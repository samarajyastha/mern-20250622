import api from "./api";

async function createOrder(data) {
  return await api.post(`/api/orders`, data);
}

async function getOrdersByUser() {
  return await api.get(`/api/orders/user`);
}

export { createOrder, getOrdersByUser };
