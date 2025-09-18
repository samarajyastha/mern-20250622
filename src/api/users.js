import api from "./api";

async function getAllUsers() {
  return await api.get(`/api/users`);
}

async function updateUser(id, data) {
  return await api.put(`/api/users/${id}`, data);
}

async function updateUserRoles(id, data) {
  return await api.put(`/api/users/${id}/roles`, data);
}

export { getAllUsers, updateUser, updateUserRoles };
