import { deleteOrder } from "@/api/orders";
import { FiAlertCircle } from "react-icons/fi";
import { toast } from "react-toastify";
import { useState } from "react";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";
import { ORDERS_ROUTE } from "@/constants/routes";

const DeleteAction = ({ order, setIsUpdated }) => {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  function removeOrder() {
    deleteOrder(order._id)
      .then(() => {
        toast.success("Order deleted successfully.", { autoClose: 1000 });

        router.push(ORDERS_ROUTE);

        setIsUpdated(true);
      })
      .catch((error) => {
        toast.error(error.response?.data, { autoClose: 1000 });
      })
      .finally(() => {
        setShowModal(false);
      });
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="text-white bg-red-600 hover:bg-red-700 rounded-md px-4 py-1 text-sm"
      >
        Delete
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        label={"Are you sure you want to delete this order?"}
        confirmAction={
          <button
            className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-600 rounded-lg border border-red-200 hover:bg-red-700 focus:z-10 focus:ring-4 focus:ring-red-100 "
            onClick={removeOrder}
          >
            Yes, I&apos;m sure
          </button>
        }
        info={
          <p className="mb-5">
            <span className="font-medium">Order id</span> : {order.orderNumber}
          </p>
        }
        icon={<FiAlertCircle className="mx-auto mb-4 text-red-600 w-12 h-12" />}
      />
    </>
  );
};

export default DeleteAction;
