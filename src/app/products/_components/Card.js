import { FaCartPlus, FaStar } from "react-icons/fa6";
import { GRID_VIEW, LIST_VIEW } from "@/constants/productView";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

import imagePlaceholder from "@/assets/images/products/placeholder.png";
import AddToCart from "./AddToCart";

const ProductCard = ({ product, productView }) => {
  return (
    <div
      className={`bg-white dark:bg-slate-700 dark:text-white rounded-lg overflow-hidden shadow-md ${
        productView == GRID_VIEW
          ? "block"
          : "block md:grid md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_4fr]"
      }`}
    >
      <div className="relative overflow-hidden shadow-sm">
        <Link href={`${PRODUCTS_ROUTE}/${product._id}`}>
          <Image
            src={product.imageUrls[0] ?? imagePlaceholder}
            className={`w-full object-cover hover:scale-105 transition-all duration-300 ${
              productView == GRID_VIEW ? "h-48" : "h-48 md:h-full"
            }`}
            alt={product.name}
            height={300}
            width={500}
          />
        </Link>
        <span className="absolute top-2 left-2 bg-red-500 text-white rounded-full text-xs h-10 w-10 flex items-center justify-center">
          -20%
        </span>
      </div>
      <div className="p-4 flex flex-col justify-center">
        <div className="flex items-center mb-2">
          <Link
            href={`?brands=${product.brand}`}
            className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300"
          >
            {product.brand}
          </Link>
          <Link
            href={`?category=${product.category}`}
            className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-600 dark:text-gray-300"
          >
            {product.category}
          </Link>
        </div>
        <h3 className="font-semibold text-xl hover:text-secondary dark:hover:text-primary transition-all duration-300">
          <Link href={`${PRODUCTS_ROUTE}/${product._id}`}>{product.name}</Link>
        </h3>
        <div className="text-yellow-500 text-xs py-2 flex items-center gap-0.5">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="text-gray-500 dark:text-gray-300 ml-1">(265)</span>
        </div>
        {productView == LIST_VIEW && (
          <p className="hidden md:block text-gray-600 dark:text-gray-300">
            {product.description.slice(0, 250)}...
          </p>
        )}
        <div className="flex justify-between">
          <div>
            <span className="text-primary dark:text-secondary font-bold mr-1 text-lg">
              Rs. {product.price}
            </span>
            <span className="line-through text-gray-500 dark:text-gray-300 text-sm">
              Rs. {product.price * 1.2}
            </span>
          </div>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
