import express from "express";
import orderController from "../controllers/orderController.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ADMIN, MERCHANT } from "../constants/roles.js";

const router = express.Router();

// URL: /api/orders
router.get("/", roleBasedAuth(ADMIN), orderController.getOrders);

// URL: /api/orders/user
router.get("/user", orderController.getOrdersByUser);

router.get(
  "/merchant",
  roleBasedAuth(MERCHANT),
  orderController.getOrdersOfMerchant
);

router.get("/:id", roleBasedAuth(ADMIN), orderController.getOrderById);

router.post("/", orderController.createOrder);

router.put("/:id", orderController.updateOrder);

router.delete("/:id", orderController.deleteOrder);

// URL: /api/orders/:id/payment/khalti
router.post("/:id/payment/khalti", orderController.orderPaymentViaKhalti);

router.post("/:id/payment/stripe", orderController.orderPaymentViaStripe);

router.put("/:id/confirm-payment", orderController.confirmOrderPayment);

export default router;
