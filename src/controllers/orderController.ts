import orderService from "../services/orderService";
import type { Request, Response } from "express";

const getOrders = async (req: Request, res: Response) => {
  try {
    const data = await orderService.getOrders();

    res.json(data);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const getOrdersByUser = async (req: Request, res: Response) => {
  try {
    const data = await orderService.getOrdersByUser(req.user._id);

    res.json(data);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const getOrderById = async (req: Request, res: Response) => {
  try {
    const data = await orderService.getOrderById(req.params.id);

    res.json(data);
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const createOrder = async (req: Request, res: Response) => {
  const input = req.body;

  if (!input.orderItems || !input.orderItems.length) {
    return res.status(400).send("Order items are required.");
  }

  try {
    const data = await orderService.createOrder(req.body, req.user);

    res.json(data);
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const updateOrder = async (req: Request, res: Response) => {
  try {
    const data = await orderService.updateOrder(
      req.params.id,
      req.body,
      req.user
    );

    res.json(data);
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const deleteOrder = async (req: Request, res: Response) => {
  try {
    await orderService.deleteOrder(req.params.id, req.user);

    res.send("Order deleted successfully.");
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const orderPaymentViaKhalti = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const data = await orderService.orderPaymentViaKhalti(id, req.user);

    res.json(data);
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const confirmOrderPayment = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const data = await orderService.confirmOrderPayment(
      id,
      req.body.status,
      req.user
    );

    res.json(data);
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const getOrdersOfMerchant = async (req: Request, res: Response) => {
  try {
    const data = await orderService.getOrdersOfMerchant(req.user._id);

    res.json(data);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
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
  updateOrder,
};
