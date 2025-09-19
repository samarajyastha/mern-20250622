import config from "@/config";
import axios from "axios";

async function login({ email, password }) {
  return await axios.post(`${config.apiUrl}/api/auth/login`, {
    email,
    password,
  });
}

async function signup(data) {
  return await axios.post(`${config.apiUrl}/api/auth/register`, data);
}

async function forgotPassword(data) {
  return await axios.post(`${config.apiUrl}/api/auth/forgot-password`, data);
}

async function resetPassword(token, userId, data) {
  return await axios.post(
    `${config.apiUrl}/api/auth/reset-password?token=${token}&userId=${userId}`,
    data
  );
}

export { login, signup, forgotPassword, resetPassword };
