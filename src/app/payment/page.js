"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import config from "@/config";
import { payViaStripe } from "@/api/payment";

const stripePromise = loadStripe(config.stripeKey);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    try {
      const res = await payViaStripe({
        amount: 5000,
        currency: "usd",
      });

      const { clientSecret } = await res.data;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <CardElement />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="mt-4 px-4 py-1 bg-blue-600 text-white rounded"
      >
        {loading ? "Processing..." : "Pay via card"}
      </button>
    </form>
  );
}

export default function Payment() {
  return (
    <div className="container py-10 px-4">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
