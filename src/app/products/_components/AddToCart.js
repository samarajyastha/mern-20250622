"use client";

import { addToCart } from "@/redux/cart/cartSlice";
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddToCart = ({ product, label }) => {
  const dispatch = useDispatch();

  function addProductToCart() {
    delete product.description;

    dispatch(addToCart(product));

    toast.success(`${product.name} added to cart.`, {
      autoClose: 750,
    });
  }

  return (
    <button
      onClick={addProductToCart}
      className={`text-primary dark:text-white flex items-center gap-2 ${label?"px-4 py-2 bg-primary rounded-lg text-white hover:bg-primary/90":""}`}
    >
      <span>{label}</span>
      <FaCartPlus />
    </button>
  );
};

export default AddToCart;
