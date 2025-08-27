"use client";
import config from "@/config";
import axios from "axios";

const authToken = localStorage.getItem("authToken");

async function getAllUsers() {
  return await axios.get(`${config.apiUrl}/api/users`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
}

export { getAllUsers };
