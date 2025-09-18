import express from "express";
import userController from "../controllers/userController.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ADMIN } from "../constants/roles.js";

const router = express.Router();

// URL: /api/users
router.post("/", roleBasedAuth(ADMIN), userController.createUser);

// URL: /api/users
router.get("/", roleBasedAuth(ADMIN), userController.getUsers);

// URL: /api/users/:id
router.get("/:id", roleBasedAuth(ADMIN), userController.getUserById);

// URL: /api/users/:id
router.put("/:id", userController.updateUser);

router.put("/:id/roles", userController.updateUserRoles);

// URL: /api/users/:id
router.delete("/:id", roleBasedAuth(ADMIN), userController.deleteUser);

router.patch("/:id/profile-image", userController.updateProfileImage);

router.post("/merchant", roleBasedAuth(ADMIN), userController.createMerchant);

export default router;
