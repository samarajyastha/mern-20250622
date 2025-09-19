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

async function updateProfileImage(id, file) {
  return await api.patch(`/api/users/${id}/profile-image`, file);
}

export { getAllUsers, updateUser, updateUserRoles, updateProfileImage };
