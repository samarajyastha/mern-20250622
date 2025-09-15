import axios from "axios";
import config from "../config/config.js";
import Stripe from "stripe";

const payViaKhalti = async (data) => {
  if (!data) throw { message: "Payment data is required." };

  if (!data.amount) throw { message: "Payment amount is required." };

  if (!data.purchaseOrderId)
    throw { message: "Purchase order id is required." };

  if (!data.purchaseOrderName)
    throw { message: "Purchase order name is required." };

  const body = {
    return_url: config.khalti.returnUrl,
    amount: data.amount,
    website_url: config.appUrl,
    purchase_order_id: data.purchaseOrderId,
    purchase_order_name: data.purchaseOrderName,
    customer_info: {
      name: data.customer.name,
      email: data.customer.email,
      phone: data.customer.phone,
    },
  };

  console.log(config);

  const response = await axios.post(
    `${config.khalti.apiUrl}/epayment/initiate/`,
    body,
    {
      headers: {
        Authorization: `Key ${config.khalti.apiKey}`,
      },
    }
  );

  return response.data;
};

const payViaStripe = async ({ amount, currency }) => {
  const stripe = new Stripe(config.stripe.secretKey);

  const paymentIntent = await stripe.paymentIntents.create({
    amount, // amount in cents
    currency, // e.g. "usd"
    automatic_payment_methods: { enabled: true },
  });

  return paymentIntent;
};

export default { payViaKhalti, payViaStripe };
