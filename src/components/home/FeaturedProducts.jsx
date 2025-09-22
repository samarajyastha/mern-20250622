import { getProducts } from "@/api/products";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping, FaImage, FaStar } from "react-icons/fa6";

const Card = ({ product }) => {
  return (
    <div className="bg-white  dark:bg-gray-800 rounded-lg shadow-md">
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
        <span className="absolute top-2 left-2 bg-red-500 text-white rounded-full text-xs py-3 px-1.5">
          -20%
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-xl">{product.name}</h3>
        <div className="text-yellow-500 text-xs py-2">
          <FaStar />
          <span className="text-gray-500">(265)</span>
        </div>
        <div className="flex justify-between">
          <div>
            <span className="text-primary font-bold mr-1 text-lg">
              Rs.{product.price * 0.9}
            </span>
            <span className="line-through text-gray-500 text-sm">
              Rs.{product.price}
            </span>
          </div>
          <button className="text-primary">
            <FaCartShopping />
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = async () => {
  const response = await getProducts({ brands: "Apple" });

  const products = response.data;

  return (
    <section id="products" className="py-16 bg-slate-100 dark:bg-gray-700 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            Featured Products
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
        <div className="text-center mt-12">
          <Link
            href={PRODUCTS_ROUTE}
            className="text-white bg-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/90"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
