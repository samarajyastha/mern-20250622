"use client";
import { getAllUsers } from "@/api/users";

const UsersPage = () => {
  getAllUsers()
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  return <div>UsersPage</div>;
};

export default UsersPage;
