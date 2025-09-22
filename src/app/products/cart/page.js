"use client";

import Image from "next/image";
import { FiMinusCircle, FiPlusCircle, FiSettings } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import imagePlaceholder from "@/assets/images/products/placeholder.png";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/cart/cartSlice";
import RemoveFromCart from "../_components/RemoveFromCart";
import Checkout from "../_components/Checkout";

const ProductsCart = () => {
  const { products, totalPrice } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <section className="py-10">
      <h2 className="text-3xl font-medium text-gray-800 dark:text-gray-200 mb-5 ml-2">
        Your cart items
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex justify-center">
                  <FiSettings />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.length == 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-2">
                  Cart items empty.
                </td>
              </tr>
            ) : (
              products?.map((product, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src={product.imageUrls[0] ?? imagePlaceholder}
                        height={32}
                        width={32}
                        alt={product.name}
                        className="h-8 w-8 object-cover rounded"
                      />
                      {product.name}
                    </div>
                  </th>
                  <td className="px-6 py-4">{product.brand}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Rs. {product.price}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <button
                        className="text-lg"
                        onClick={() => dispatch(decreaseQuantity(product))}
                      >
                        <FiMinusCircle />
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        className="text-lg"
                        onClick={() => dispatch(increaseQuantity(product))}
                      >
                        <FiPlusCircle />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <RemoveFromCart product={product} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-end py-4 gap-4">
        <button
          onClick={() => dispatch(clearCart())}
          className="px-4 py-1 text-sm rounded-md bg-red-500 border border-red-600 text-white hover:bg-red-700"
        >
          Clear Cart
        </button>
        <Checkout products={products} totalPrice={totalPrice} />
      </div>
    </section>
  );
};

export default ProductsCart;
