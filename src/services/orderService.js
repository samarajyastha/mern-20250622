import Order from "../models/Order.js";
import Payment from "../models/Payment.js";
import crypto from "crypto";
import payment from "../utils/payment.js";
import {
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_PENDING,
} from "../constants/orderStatuses.js";
import { PAYMENT_STATUS_COMPLETED } from "../constants/paymenStatuses.js";

const getOrders = async () => {
  const orders = await Order.find()
    .populate("orderItems.product")
    .populate("user", ["name", "email", "phone", "address"]);

  return orders;
};

const getOrdersByUser = async (userId) => {
  const orders = await Order.find({ user: userId })
    .populate("orderItems.product")
    .populate("user", ["name", "email", "phone", "address"])
    .populate("payment");

  return orders;
};

const getOrderById = async (id) => {
  const order = await Order.findById(id)
    .populate("orderItems.product")
    .populate("user", ["name", "email", "phone", "address"])
    .populate("payment");

  if (!order) {
    throw {
      statusCode: 404,
      message: "Order not found.",
    };
  }

  return order;
};

const createOrder = async (data, userId) => {
  const orderNumber = crypto.randomUUID();

  return await Order.create({ ...data, user: userId, orderNumber });
};

const updateOrder = async (id, data) => {
  return await Order.findByIdAndUpdate(
    id,
    {
      status: data.status,
    },
    { new: true }
  );
};

const deleteOrder = async (id) => {
  return await Order.findByIdAndDelete(id);
};

const orderPaymentViaKhalti = async (id) => {
  const order = await getOrderById(id);

  const transactionId = crypto.randomUUID();

  const orderPayment = await Payment.create({
    amount: order.totalPrice,
    method: "online",
    transactionId,
  });

  await Order.findByIdAndUpdate(id, {
    payment: orderPayment._id,
  });

  return await payment.payViaKhalti({
    amount: order.totalPrice,
    purchaseOrderId: order.id,
    purchaseOrderName: order.orderNumber,
    customer: order.user,
  });
};

const confirmOrderPayment = async (id, status) => {
  const order = await getOrderById(id);

  if (status.toUpperCase() != PAYMENT_STATUS_COMPLETED) {
    await Payment.findByIdAndUpdate(order.payment._id, {
      status: "failed",
    });

    throw {
      statusCode: 400,
      message: "Payment failed.",
    };
  }

  await Payment.findByIdAndUpdate(order.payment._id, {
    status: PAYMENT_STATUS_COMPLETED,
  });

  return await Order.findByIdAndUpdate(
    id,
    {
      status: ORDER_STATUS_CONFIRMED,
    },
    { new: true }
  );
};

export default {
  createOrder,
  deleteOrder,
  getOrderById,
  getOrders,
  getOrdersByUser,
  updateOrder,
  orderPaymentViaKhalti,
  confirmOrderPayment,
};
