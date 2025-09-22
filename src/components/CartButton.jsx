"use client";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { PRODUCTS_CART_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const CartButton = () => {
  const router = useRouter();

  const { products } = useSelector((state) => state.cart);

  return (
    <button
      onClick={() => router.push(PRODUCTS_CART_ROUTE)}
      className="text-sm relative px-1"
    >
      <span className="absolute -top-2 -right-2 text-white bg-red-600 text-[0.75rem] rounded-full h-4 w-4">{products?.length}</span>
      <MdOutlineAddShoppingCart />
    </button>
  );
};

export default CartButton;
