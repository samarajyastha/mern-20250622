import { FaCartPlus, FaStar } from "react-icons/fa6";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

import imagePlaceholder from "@/assets/images/products/placeholder.png";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white dark:bg-slate-700 dark:text-white rounded-lg shadow-md">
      <div className="relative overflow-hidden rounded-t-lg">
        <Link href={`${PRODUCTS_ROUTE}/${product._id}`}>
          <Image
            src={product.imageUrls[0] ?? imagePlaceholder}
            className="w-full h-48 object-cover hover:scale-105 transition-all duration-300"
            alt={product.name}
            height={300}
            width={500}
          />
        </Link>
        <span className="absolute top-2 left-2 bg-red-500 text-white rounded-full text-xs h-10 w-10 flex items-center justify-center">
          -20%
        </span>
      </div>
      <div className="p-4">
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
        <div className="flex justify-between">
          <div>
            <span className="text-primary dark:text-secondary font-bold mr-1 text-lg">
              Rs. {product.price}
            </span>
            <span className="line-through text-gray-500 dark:text-gray-300 text-sm">
              Rs. {product.price * 1.2}
            </span>
          </div>
          <button className="text-primary dark:text-secondary">
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
