import React from "react";
import { FaRedo } from "react-icons/fa";
import { FaCheck, FaCreditCard, FaTruck } from "react-icons/fa6";

const Features = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-white dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Choose ShopNest?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            We provide the best shopping experience with our premium quality
            products.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-8">
          <div className="bg-slate-100 dark:bg-slate-900 py-5 px-7 rounded-lg shadow-md">
            <div className="text-4xl text-primary mb-4">
              <FaCheck />
            </div>
            <h3 className="font-semibold text-xl mb-2">Quality Products</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We provide only the best quality products from the trusted
              suppliers.
            </p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-900 py-5 px-7 rounded-lg shadow-md">
            <div className="text-3xl text-primary mb-4">
              <FaTruck />
            </div>
            <h3 className="font-semibold text-xl mb-2">Fast Delivery</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get your orders delivered in your record time.
            </p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-900 py-5 px-7 rounded-lg shadow-md">
            <div className="text-4xl text-primary mb-4">
              <FaRedo />
            </div>
            <h3 className="font-semibold text-xl mb-2">Easy Returns</h3>
            <p className="text-gray-600 dark:text-gray-400">
              No need to hustle for returning your products if not upto your
              expectations.
            </p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-900 py-5 px-7 rounded-lg shadow-md">
            <div className="text-4xl text-primary mb-4">
              <FaCreditCard />
            </div>
            <h3 className="font-semibold text-xl mb-2">Secure Payments</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Shop with confidence using your secure payment methods and also
              with multiple payment options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
