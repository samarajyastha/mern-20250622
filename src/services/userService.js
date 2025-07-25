import User from "../models/User.js";

const createUser = async (data) => await User.create(data);

const getUsers = async () => {
  const users = await User.find();

  return users;
};

const getUserById = async (id) => {
  const user = await User.findById(id);

  return user;
};

const updateUser = async (id, data) => {
  const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });

  return updatedUser;
};

const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
};

export default { createUser, getUsers, getUserById, updateUser, deleteUser };
