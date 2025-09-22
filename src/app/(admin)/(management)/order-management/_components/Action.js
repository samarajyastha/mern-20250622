import { updateOrder } from "@/api/orders";
import Modal from "@/components/Modal";
import { useState } from "react";
import { BsBox2 } from "react-icons/bs";
import { FaPencil } from "react-icons/fa6";
import { toast } from "react-toastify";

const Action = ({ id, orderStatus }) => {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(orderStatus);

  function updateOrderStatus() {
    updateOrder(id, { status })
      .then(() => {
        toast.success(`Status updated: ${status}`, { autoClose: 1500 });
      })
      .catch(() => {
        toast.error("Status update failed.", { autoClose: 1500 });
      })
      .finally(() => {
        setShowModal(false);
      });
  }

  return (
    <div className="flex items-center gap-4 justify-center">
      <button onClick={() => setShowModal(true)} className="text-blue-600 cursor-pointer">
        <FaPencil />
      </button>

      <Modal
        icon={<BsBox2 className="mx-auto text-6xl text-gray-400 mb-5" />}
        showModal={showModal}
        setShowModal={setShowModal}
        label={"Update order status"}
        info={
          <div className="pb-5">
            <select
              className="border rounded-md px-8 py-1 border-gray-300"
              onChange={(e) => setStatus(e.target.value)}
              defaultValue={orderStatus}
            >
              <option value="PENDING">PENDING</option>
              <option value="CONFIRMED">CONFIRMED</option>
              <option value="SHIPPED">SHIPPED</option>
              <option value="DELIVERED">DELIVERED</option>
            </select>
          </div>
        }
        confirmAction={
          <button
            onClick={updateOrderStatus}
            className="bg-green-700 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-green-800"
          >
            Update
          </button>
        }
      />
    </div>
  );
};

export default Action;
