import express from "express";

import auth from "../middlewares/auth.js";
import productController from "../controllers/productController.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { MERCHANT } from "../constants/roles.js";

const router = express.Router();

router.get("/", productController.getProducts);

router.get("/count", productController.getCount);

router.get("/brands", productController.getBrands);

router.get("/categories", productController.getCategories);

router.get("/:id", productController.getProductById);

router.post(
  "/",
  auth,
  roleBasedAuth(MERCHANT),
  productController.createProduct
);

router.put(
  "/:id",
  auth,
  roleBasedAuth(MERCHANT),
  productController.updateProduct
);

router.delete(
  "/:id",
  auth,
  roleBasedAuth(MERCHANT),
  productController.deleteProduct
);

export default router;
