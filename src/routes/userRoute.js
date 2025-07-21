import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

// URL: /api/users
router.post("/", userController.createUser);

// URL: /api/users
router.get("/", userController.getUsers);

// URL: /api/users/:id
router.get("/:id", userController.getUserById);

// URL: /api/users/:id
router.put("/:id", userController.updateUser);

// URL: /api/users/:id
router.delete("/:id", userController.deleteUser);

export default router;
