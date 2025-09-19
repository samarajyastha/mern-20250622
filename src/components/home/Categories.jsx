import { PRODUCTS_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { FaCube, FaLaptop, FaMobile } from "react-icons/fa6";

const Categories = () => {
  return (
    <section id="categories" className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-center">
            Browse your products by categories.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          <Link href={`${PRODUCTS_ROUTE}?category=Laptops`}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col items-center gap-2 justify-between">
              <div className="text-primary text-3xl bg-slate-100 p-5 h-20 w-20 rounded-full flex items-center justify-center">
                <FaLaptop />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">Laptops &amp; PC</h3>
                <p className="text-slate-600 text-sm">35 Products</p>
              </div>
            </div>
          </Link>
          <Link href={`${PRODUCTS_ROUTE}?category=Laptops`}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col items-center gap-2 justify-between">
              <div className="text-primary text-3xl bg-slate-100 p-5 h-20 w-20 rounded-full flex items-center justify-center">
                <FaShoppingBag />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">
                  Cosmetics &amp; Fashion
                </h3>
                <p className="text-slate-600 text-sm">562 Products</p>
              </div>
            </div>
          </Link>

          <Link href={`${PRODUCTS_ROUTE}?category=Smartphones`}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col items-center gap-2 justify-between">
              <div className="text-primary text-3xl bg-slate-100 p-5 h-20 w-20 rounded-full flex items-center justify-center">
                <FaMobile />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">Smartphones</h3>
                <p className="text-slate-600 text-sm">95 Products</p>
              </div>
            </div>
          </Link>

          <Link href={`${PRODUCTS_ROUTE}?category=Laptops`}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col items-center gap-2 justify-between">
              <div className="text-primary text-3xl bg-slate-100 p-5 h-20 w-20 rounded-full flex items-center justify-center">
                <FaCube />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">Miscellaneous</h3>
                <p className="text-slate-600 text-sm">255 Products</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
