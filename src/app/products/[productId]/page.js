import { FaStar } from "react-icons/fa6";
import { getProductById } from "@/api/products";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import AddToCart from "../_components/AddToCart";
import Link from "next/link";
import Description from "../_components/Description";
import Related from "../_components/Related";
import ImagePreview from "../_components/ImagePreview";

export const generateMetadata = async ({ params }) => {
  const productId = (await params).productId;

  const response = await getProductById(productId);

  const product = response.data;

  return {
    title: product?.name,
    keywords: `${product?.name}, ${product?.brand}, ${product?.category}`,
  };
};

const ProductDetails = async ({ params }) => {
  const productId = (await params).productId;

  const response = await getProductById(productId);

  const product = response.data;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <ImagePreview imageUrls={product.imageUrls} />
        {/* Product Details */}
        <div className="md:w-1/2 py-4">
          <Link
            href={`${PRODUCTS_ROUTE}?category=${product.category}`}
            className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary inset-ring inset-ring-primary/20"
          >
            {product.category}
          </Link>

          <h1 className="text-3xl font-bold text-gray-800 my-2 dark:text-white">
            {product.name}
          </h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="text-gray-600 dark:text-white ml-2">5 (128 reviews)</span>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
              Brand: <span className="text-secondary">{product.brand}</span>
            </h2>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Price</h2>
            <div className="flex items-center">
              <span className="text-3xl font-bold text-primary">
                Rs. {product.price * 0.9}
              </span>
              <span className="text-lg text-gray-500 dark:text-gray-300 line-through ml-2">
                Rs. {product.price}
              </span>
              <span className="bg-red-100 text-red-600 text-sm font-semibold ml-4 px-2 py-1 rounded">
                10% OFF
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mb-8">
            <AddToCart product={product} label="Add to cart" />
            <button className="bg-white text-primary border border-primary px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50">
              Buy Now
            </button>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
              <i className="fas fa-truck-fast text-indigo-500 mr-2" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
              <i className="fas-regular fa-rotate-left text-indigo-500 mr-2" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <i className="fas-solid fa-shield-alt text-indigo-500 mr-2" />
              <span>2-year warranty included</span>
            </div>
          </div>
        </div>
      </div>
      {/* Product Description and Details */}
      <div className="mt-12">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button className="px-4 py-2 text-primary border-b-2 border-primary font-medium">
              Description
            </button>
          </nav>
        </div>
        <div className="bg-white p-8 rounded-b-lg shadow-md dark:bg-gray-700">
          <Description description={product.description} />
        </div>
      </div>
      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          You might also like
        </h2>
        <Related category={product.category} />
      </div>
    </main>
  );
};

export default ProductDetails;
