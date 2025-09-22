import Order from "../models/Order.js";
import Payment from "../models/Payment.js";
import crypto from "crypto";
import payment from "../utils/payment.js";
import {
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_PENDING,
} from "../constants/orderStatuses.js";
import { PAYMENT_STATUS_COMPLETED } from "../constants/paymenStatuses.js";
import { ADMIN } from "../constants/roles.js";

const getOrders = async () => {
  const orders = await Order.aggregate([
    {
      $lookup: {
        from: "products",
        localField: "orderItems.product",
        foreignField: "_id",
        as: "orderItems",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $unwind: "$user",
    },
    {
      $project: {
        "user.name": 1,
        "user.email": 1,
        "user.phone": 1,
        "user.address": 1,
        orderNumber: 1,
        orderItems: 1,
        status: 1,
        totalPrice: 1,
        shippingAddress: 1,
        createdAt: 1,
      },
    },
  ]);

  return orders;
};

const getOrdersByUser = async (query, userId) => {
  const queryParams = {};

  queryParams.user = userId;

  if (query.status) queryParams.status = query.status;

  const orders = await Order.find(queryParams)
    .sort({ createdAt: -1 })
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

const updateOrder = async (id, data, user) => {
  const order = await getOrderById(id);

  if (order.user._id != user._id && !user.roles.includes(ADMIN)) {
    throw {
      statusCode: 403,
      message: "Access denied.",
    };
  }

  return await Order.findByIdAndUpdate(
    id,
    {
      status: data.status,
    },
    { new: true }
  );
};

const deleteOrder = async (id, user) => {
  const order = await getOrderById(id);

  if (order.user._id != user._id && !user.roles.includes(ADMIN)) {
    throw {
      statusCode: 403,
      message: "Access denied.",
    };
  }

  return await Order.findByIdAndDelete(id);
};

const orderPaymentViaKhalti = async (id, user) => {
  const order = await getOrderById(id);

  if (order.user._id != user._id) {
    throw {
      statusCode: 403,
      message: "Access denied.",
    };
  }

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
    purchaseOrderId: id,
    purchaseOrderName: order.orderNumber,
    customer: order.user,
  });
};

const orderPaymentViaStripe = async (id, user) => {
  const order = await getOrderById(id);

  if (order.user._id != user._id) {
    throw {
      statusCode: 403,
      message: "Access denied.",
    };
  }

  const transactionId = crypto.randomUUID();

  const orderPayment = await Payment.create({
    amount: order.totalPrice,
    method: "card",
    transactionId,
  });

  await Order.findByIdAndUpdate(id, {
    payment: orderPayment._id,
  });

  return await payment.payViaStripe({
    amount: order.totalPrice,
    orderId: id,
    orderName: order.orderNumber,
    customer: order.user,
  });
};

const confirmOrderPayment = async (id, status, user) => {
  const order = await getOrderById(id);

  if (order.user._id != user._id && !user.roles.includes(ADMIN)) {
    throw {
      statusCode: 403,
      message: "Access denied.",
    };
  }

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

const getOrdersOfMerchant = async (merchantId) => {
  const orders = await Order.aggregate([
    {
      $lookup: {
        from: "products",
        localField: "orderItems.product",
        foreignField: "_id",
        as: "orderItems",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $unwind: "$user",
    },
    {
      $project: {
        "user.name": 1,
        "user.email": 1,
        "user.phone": 1,
        "user.address": 1,
        orderNumber: 1,
        orderItems: 1,
        status: 1,
        totalPrice: 1,
        shippingAddress: 1,
        createdAt: 1,
      },
    },
  ]);

  return orders
    .map((order) => {
      const filteredItems = order.orderItems.filter(
        (item) => item.createdBy == merchantId
      );

      return {
        ...order,
        orderItems: filteredItems,
      };
    })
    .filter((order) => order.orderItems.length > 0);
};

export default {
  confirmOrderPayment,
  createOrder,
  deleteOrder,
  getOrderById,
  getOrders,
  getOrdersByUser,
  getOrdersOfMerchant,
  orderPaymentViaKhalti,
  orderPaymentViaStripe,
  updateOrder,
};
