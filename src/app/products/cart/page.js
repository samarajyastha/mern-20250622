"use client";

import Image from "next/image";
import { FiSettings } from "react-icons/fi";
import { useSelector } from "react-redux";
import imagePlaceholder from "@/assets/images/products/placeholder.png";

const ProductsCart = () => {
  const { products } = useSelector((state) => state.cart);

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
                <FiSettings />
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
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
                      className="h-8 w-8 object-cover"
                    />
                    {product.name}
                  </div>
                </th>
                <td className="px-6 py-4">{product.brand}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">Rs. {product.price}</td>
                <td className="px-6 py-4">{product.quantity}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductsCart;
