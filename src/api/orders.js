import api from "./api";

async function createOrder(data) {
  return await api.post(`/api/orders`, data);
}

async function getOrdersByUser(status) {
  return await api.get(`/api/orders/user?status=${status}`);
}

async function deleteOrder(id) {
  return await api.delete(`/api/orders/${id}`);
}

async function updateOrder(id, data) {
  return await api.put(`/api/orders/${id}`, data);
}

async function payViaKhalti(orderId) {
  return await api.post(`/api/orders/${orderId}/payment/khalti`);
}

async function payViaStripe(orderId) {
  return await api.post(`/api/orders/${orderId}/payment/stripe`);
}

async function confirmPayment(orderId, data) {
  return await api.put(`/api/orders/${orderId}/confirm-payment`, data);
}

export {
  createOrder,
  getOrdersByUser,
  deleteOrder,
  updateOrder,
  payViaKhalti,
  confirmPayment,
  payViaStripe,
};
