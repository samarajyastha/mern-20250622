"use client";

import { addToCart } from "@/redux/cart/cartSlice";
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddToCart = ({ product }) => {
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
      className="text-primary dark:text-secondary"
    >
      <FaCartPlus />
    </button>
  );
};

export default AddToCart;
