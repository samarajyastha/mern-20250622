import User from "../models/User.js";
import uploadFile from "../utils/file.js";

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

const updateProfileImage = async (id, file) => {
  const uploadedFiles = await uploadFile([file]);

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { profileImageUrl: uploadedFiles[0]?.url },
    { new: true }
  );

  return updatedUser;
};

export default {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  updateProfileImage,
};
