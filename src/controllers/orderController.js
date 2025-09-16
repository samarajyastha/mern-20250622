import orderService from "../services/orderService.js";

const getOrders = async (req, res) => {
  try {
    const data = await orderService.getOrders();

    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOrdersByUser = async (req, res) => {
  try {
    const data = await orderService.getOrdersByUser(req.query, req.user._id);

    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOrderById = async (req, res) => {
  try {
    const data = await orderService.getOrderById(req.params.id);

    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const createOrder = async (req, res) => {
  const input = req.body;

  if (!input.orderItems || !input.orderItems.length) {
    return res.status(400).send("Order items are required.");
  }

  try {
    const data = await orderService.createOrder(req.body, req.user);

    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const updateOrder = async (req, res) => {
  try {
    const data = await orderService.updateOrder(
      req.params.id,
      req.body,
      req.user
    );

    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const deleteOrder = async (req, res) => {
  try {
    await orderService.deleteOrder(req.params.id, req.user);

    res.send("Order deleted successfully.");
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const orderPaymentViaKhalti = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await orderService.orderPaymentViaKhalti(id, req.user);

    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const orderPaymentViaStripe = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await orderService.orderPaymentViaStripe(id, req.user);

    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const confirmOrderPayment = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await orderService.confirmOrderPayment(
      id,
      req.body.status,
      req.user
    );

    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const getOrdersOfMerchant = async (req, res) => {
  try {
    const data = await orderService.getOrdersOfMerchant(req.user._id);

    res.json(data);
  } catch (error) {
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
  orderPaymentViaStripe,
  updateOrder,
};
