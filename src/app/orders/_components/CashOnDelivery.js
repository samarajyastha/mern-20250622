import { updateOrder } from "@/api/orders";
import { ORDER_STATUS_CONFIRMED } from "@/constants/orderStatus";
import { ORDERS_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { toast } from "react-toastify";

const CashOnDelivery = ({ order }) => {
  const router = useRouter();

  function confirmOrder() {
    updateOrder(order._id, {
      status: ORDER_STATUS_CONFIRMED,
    })
      .then(() => {
        toast.success("Order confirmed successfully.", { autoClose: 1000 });

        router.push(`${ORDERS_ROUTE}?status=${ORDER_STATUS_CONFIRMED}`);
      })
      .catch((error) => {
        toast.error(error.response?.data, { autoClose: 1000 });
      });
  }

  return (
    <button
      onClick={confirmOrder}
      className="bg-green-700 hover:bg-green-800 px-4 py-1 text-sm rounded-md text-white flex items-center gap-2"
    >
      <LiaMoneyBillWaveSolid />
      Cash on Delivery
    </button>
  );
};

export default CashOnDelivery;
