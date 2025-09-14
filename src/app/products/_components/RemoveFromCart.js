import Modal from "@/components/Modal";
import { removeFromCart } from "@/redux/cart/cartSlice";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";

const RemoveFromCart = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  function remove() {
    dispatch(removeFromCart(product));

    setShowModal(false);
  }

  return (
    <>
      <button
        className="font-medium text-red-600 dark:text-red-500 hover:underline"
        onClick={() => setShowModal(true)}
      >
        <FaTrashAlt />
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        label={"Are you sure you want to remove this product from cart?"}
        confirmAction={
          <button
            className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-600 rounded-lg border border-red-200 hover:bg-red-700 focus:z-10 focus:ring-4 focus:ring-red-100 "
            onClick={remove}
          >
            Yes, I&apos;m sure
          </button>
        }
        info={
          <p className="mb-5">
            <span className="font-medium">Product name</span> : {product.name}
          </p>
        }
        icon={<FiAlertCircle className="mx-auto mb-4 text-red-600 w-12 h-12" />}
      />
    </>
  );
};

export default RemoveFromCart;
