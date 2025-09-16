import { confirmPayment, payViaStripe } from "@/api/orders";
import Modal from "@/components/Modal";
import config from "@/config";
import { ORDER_STATUS_CONFIRMED } from "@/constants/orderStatus";
import { ORDERS_ROUTE } from "@/constants/routes";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegCreditCard } from "react-icons/fa6";
import { toast } from "react-toastify";

const CheckoutForm = ({ order }) => {
  const [showModal, setShowModal] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter()

  async function initPayment() {
    try {
      const response = await payViaStripe(order._id);

      const clientSecret = response.data?.client_secret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result && result.paymentIntent.status == "succeeded") {
        await confirmPayment(order._id, { status: "completed" });

        toast.success("Payment success.", {
          autoClose: 2500,
          onClose: () => {
            router.push(`${ORDERS_ROUTE}?status=${ORDER_STATUS_CONFIRMED}`);
          },
        });
      }
    } catch {
      toast.error("Payment failed.", {
        autoClose: 2500,
      });
    } finally {
      setShowModal(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="text-white bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-md flex items-center text-sm px-4 py-1 gap-2"
      >
        Card Payment
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        label={"Card payment"}
        info={
          <div className="mt-5 mb-10 border p-1 border-gray-300 rounded-md">
            <CardElement />
          </div>
        }
        icon={
          <FaRegCreditCard className="mx-auto mb-4 text-primary w-12 h-12" />
        }
        confirmAction={
          <button
            onClick={initPayment}
            className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-blue-600 rounded-lg border border-blue-200 hover:bg-blue-700 focus:z-10 focus:ring-4 focus:ring-blue-100 "
          >
            Pay via Card
          </button>
        }
      />
    </>
  );
};

const PayViaStripe = ({ order }) => {
  const stripePromise = loadStripe(config.stripeKey);

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm order={order} />
    </Elements>
  );
};

export default PayViaStripe;
