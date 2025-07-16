import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

router.get("/", productController.getProducts);

router.get("/:id", productController.getProductById);

router.post("/", productController.createProduct);

router.put("/", productController.updateProduct);

router.delete("/", productController.deleteProduct);

export default router;
