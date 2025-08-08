import userService from "../services/userService";
import type { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
  try {
    const data = await userService.createUser(req.body);

    res.status(201).json(data);
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const getUsers = async (req: Request, res: Response) => {
  const data = await userService.getUsers();

  res.json(data);
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const data = await userService.getUserById(id);

    res.json(data);
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const data = await userService.updateUser(id, req.body, req.user);

    res.status(201).json(data);
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    await userService.deleteUser(id);

    res.send(`User deleted successfully with id: ${id}`);
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const updateProfileImage = async (req: Request, res: Response) => {
  const id = req.params.id;
  const file = req.file;

  try {
    const data = await userService.updateProfileImage(id, file, req.user);

    res.json(data);
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const createMerchant = async (req: Request, res: Response) => {
  const userId = req.body.userId;

  try {
    if (!userId) return res.status(400).send("Merchant id is required.");

    const data = await userService.createMerchant(userId);

    res.json(data);
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  updateProfileImage,
  createMerchant,
};
