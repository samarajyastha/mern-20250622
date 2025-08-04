import express from "express";
import orderController from "../controllers/orderController.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ADMIN } from "../constants/roles.js";

const router = express.Router();

// URL: /api/orders
router.get("/", auth, roleBasedAuth(ADMIN), orderController.getOrders);

// URL: /api/orders/user
router.get("/user", auth, orderController.getOrdersByUser);

router.get("/:id", auth, roleBasedAuth(ADMIN), orderController.getOrderById);

router.post("/", auth, orderController.createOrder);

router.put("/:id", auth, roleBasedAuth(ADMIN), orderController.updateOrder);

router.delete("/:id", auth, roleBasedAuth(ADMIN), orderController.deleteOrder);

// URL: /api/orders/:id/payment/khalti
router.post("/:id/payment/khalti", auth, orderController.orderPaymentViaKhalti);

router.put("/:id/confirm-payment", auth, orderController.confirmOrderPayment);

export default router;
