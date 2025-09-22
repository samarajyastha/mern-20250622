import { getProducts } from "@/api/products";
import Image from "next/image";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";

const Card = ({ product }) => {
  return (
    <div className="rounded-lg shadow-md dark:bg-gray-900">
      <div className="relative">
        {product.imageUrls.length > 0 ? (
          <Image
            src={product?.imageUrls[0]}
            className="rounded-t-lg w-full h-48 object-cover"
            alt=""
            height={300}
            width={600}
          />
        ) : (
          <div className="rounded-t-lg w-full h-48 flex items-center justify-center bg-gray-200">
            <FaImage className="text-6xl text-gray-500" />
          </div>
        )}
        <span className="absolute top-3 right-3 bg-red-500 text-white rounded-full text-xs px-3 py-1">
          Bestseller
        </span>
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h3 className="font-semibold text-xl">{product.name}</h3>
        <p className="text-sm text-gray-500 py-2">
          One of the best selling airpods in the market by Apple Inc.
        </p>
        <div className="flex justify-between">
          <div>
            <span className="text-primary font-bold mr-1 text-lg">
              Rs.{product.price}
            </span>
          </div>
          <button className="bg-primary text-white rounded px-2 py-1 text-sm flex items-center gap-2">
            <span>Add to Cart</span>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularProducts = async () => {
  const response = await getProducts({ category: "Smartphones" });

  const products = response.data;

  return (
    <section id="popular-products" className="py-16 bg-white dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            Popular Products
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Check out the latest and best quality products available in the
            market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
