"use client";
import { deleteProduct } from "@/api/products";
import {
  FaAngleLeft,
  FaAngleRight,
  FaPencil,
  FaPlus,
  FaTrash,
  FaUpload,
} from "react-icons/fa6";
import { GrUpdate } from "react-icons/gr";
import { format } from "date-fns";
import { FaCog } from "react-icons/fa";
import Image from "next/image";
import imagePlaceholder from "@/assets/images/products/placeholder.png";
import Link from "next/link";
import { PRODUCT_MANAGEMENT_ROUTE } from "@/constants/routes";

const ProductsTable = ({ products }) => {
  return (
    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
        <div className="flex items-center flex-1 space-x-4">
          <h5>
            <span className="text-gray-500">All Products: </span>
            <span className="dark:text-white">123456</span>
          </h5>
          <h5>
            <span className="text-gray-500">Total sales: </span>
            <span className="dark:text-white">$88.4k</span>
          </h5>
        </div>
        <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
          <Link
            href={`${PRODUCT_MANAGEMENT_ROUTE}/add`}
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-primary/90"
          >
            <FaPlus className="h-3.5 w-3.5 mr-2" />
            Add new product
          </Link>
          <button
            type="button"
            className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <GrUpdate className="w-4 h-4 mr-2" />
            Update stocks 1/250
          </button>
          <button
            type="button"
            className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <FaUpload className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
          <thead className="text-xs text-gray-700 font-medium uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
            <tr>
              <th scope="col" className="px-4 py-3">
                S.N
              </th>
              <th scope="col" className="px-4 py-3">
                Product
              </th>
              <th scope="col" className="px-4 py-3">
                Brand
              </th>
              <th scope="col" className="px-4 py-3">
                Category
              </th>
              <th scope="col" className="px-4 py-3">
                Price
              </th>
              <th scope="col" className="px-4 py-3">
                Stock
              </th>
              <th scope="col" className="px-4 py-3">
                Created At
              </th>
              <th scope="col" className="px-4 py-3 flex justify-center">
                <FaCog />
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-4 py-2">
                  <div className="flex items-center">{index + 1}.</div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-4 py-2 font-medium whitespace-nowrap"
                >
                  <Image
                    height={32}
                    width={32}
                    src={product.imageUrls[0] ?? imagePlaceholder}
                    alt={product.name}
                    className="w-8 h-8 mr-3 object-cover"
                  />
                  {product.name}
                </th>
                <td className="px-4 py-2">
                  <div className="flex items-center">{product.brand}</div>
                </td>
                <td className="px-4 py-2">
                  <span className="bg-primary/5 text-primary text-xs font-medium px-2 py-0.5 rounded">
                    {product.category}
                  </span>
                </td>
                <td className="px-4 py-2 font-medium whitespace-nowrap">
                  <div className="flex items-center">Rs. {product.price}</div>
                </td>
                <td className="px-4 py-2 font-medium whitespace-nowrap">
                  <div className="flex items-center">
                    {product.stock > 10 ? (
                      <div className="inline-block w-3 h-3 mr-2 bg-green-500 rounded-full" />
                    ) : product.stock > 5 ? (
                      <div className="inline-block w-3 h-3 mr-2 bg-yellow-500 rounded-full" />
                    ) : (
                      <div className="inline-block w-3 h-3 mr-2 bg-red-500 rounded-full" />
                    )}
                    {product.stock ?? 1}
                  </div>
                </td>
                <td className="px-4 py-2 font-medium whitespace-nowrap">
                  {format(product.createdAt, "dd MMM, yyyy")}
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-4 justify-center">
                    <Link
                      href={`${PRODUCT_MANAGEMENT_ROUTE}/edit/${product._id}`}
                      className="text-blue-600"
                    >
                      <FaPencil />
                    </Link>
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="text-red-600"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav
        className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing
          <span className="font-semibold">1-10</span>
          of
          <span className="font-semibold">1000</span>
        </span>
        <ul className="inline-flex items-stretch -space-x-px">
          <li>
            <a
              href="#"
              className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <FaAngleLeft />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border border-gray-300 text-primary bg-primary/20 hover:bg-primary/30 dark:border-gray-700 dark:bg-gray-700"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              ...
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              100
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <FaAngleRight />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductsTable;
