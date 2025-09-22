import { clearCart } from "@/redux/cart/cartSlice";
import { createOrder } from "@/api/orders";
import { LOGIN_ROUTE, ORDERS_ROUTE } from "@/constants/routes";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "@/components/Spinner";

const Checkout = ({ products, totalPrice }) => {
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const router = useRouter();
  const dispatch = useDispatch();

  function checkoutOrder() {
    if (!user) return router.push(LOGIN_ROUTE);

    setLoading(true);

    createOrder({
      orderItems: products.map((product) => ({
        product: product._id,
        quantity: product.quantity,
      })),
      totalPrice,
      shippingAddress: user?.address,
    })
      .then(() => {
        toast.success("Order created successfully.", { autoClose: 1500 });

        router.push(ORDERS_ROUTE);

        dispatch(clearCart());
      })
      .catch((error) => {
        toast.error(error.response.data, { autoClose: 1500 });
      })
      .finally(() => setLoading(false));
  }

  return (
    <button
      onClick={checkoutOrder}
      className="bg-primary text-sm text-white px-4 py-1 rounded-md hover:bg-primary/90 flex gap-1 items-center disabled:bg-primary/80 disabled:cursor-not-allowed"
      disabled={loading || products?.length === 0}
    >
      Checkout | Rs. {totalPrice}
      {loading && <Spinner className="w-4 h-4 fill-secondary" />}
    </button>
  );
};

export default Checkout;
