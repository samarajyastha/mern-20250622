"use client";

import { PRODUCTS_ROUTE } from "@/constants/routes";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const DEFAULT_LIMIT = 10;
const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000000000000;
const DEFAULT_SORT = JSON.stringify({ createdAt: -1 });
const DEFAULT_BRANDS_FILTER = [];
const DEFAULT_CATEGORY_FILTER = "";

const FilterDrawer = ({ showFilter, setShowFilter, brands, categories }) => {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);
  const [sort, setSort] = useState(DEFAULT_SORT);
  const [brandsFilter, setBrandsFilter] = useState(DEFAULT_BRANDS_FILTER);
  const [categoryFilter, setCategoryFilter] = useState(DEFAULT_CATEGORY_FILTER);

  const router = useRouter();
  const searchParams = useSearchParams();

  function setFilter() {
    const params = new URLSearchParams(searchParams.toString());

    params.set("limit", limit);
    params.set("sort", sort);
    params.set("min", minPrice < 0 ? 0 : minPrice);
    params.set("max", maxPrice);
    params.set("brands", brandsFilter.join(","));
    params.set("category", categoryFilter);

    router.push(`?${params.toString()}`);

    setShowFilter(false);
  }

  function resetFilter() {
    setLimit(DEFAULT_LIMIT);
    setMinPrice(DEFAULT_MIN_PRICE);
    setMaxPrice(DEFAULT_MAX_PRICE);
    setSort(DEFAULT_SORT);
    setBrandsFilter(DEFAULT_BRANDS_FILTER);
    setCategoryFilter(DEFAULT_CATEGORY_FILTER);

    router.push(PRODUCTS_ROUTE);

    setShowFilter(false);
  }

  function handleBrandsFilterChange(brand) {
    setBrandsFilter((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item != brand)
        : [...prev, brand]
    );
  }

  return (
    <div className={showFilter ? "block absolute" : "hidden"}>
      <div
        className="fixed top-0 left-0 h-screen w-full bg-black dark:bg-slate-900 opacity-20 z-10"
        onClick={() => setShowFilter(false)}
      ></div>
      <div className="overflow-y-auto fixed top-14 left-0 z-20 h-screen bg-white dark:bg-slate-900 px-4 pt-8 pb-14 min-w-72 shadow">
        <h4 className="text-2xl font-medium mb-2 dark:text-white">
          Filter products
        </h4>
        <div className="py-3">
          <label
            htmlFor="limit"
            className="block mb-2 text-sm font-semibold text-gray-500 uppercase dark:text-gray-300"
          >
            Limit
          </label>
          <select
            id="limit"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

        <div className="py-3">
          <label
            htmlFor="orderBy"
            className="block mb-2 text-sm font-semibold text-gray-500 uppercase dark:text-gray-300"
          >
            Order By
          </label>
          <select
            id="orderBy"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
            <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
            <option value={JSON.stringify({ price: 1 })}>
              Price: Low to High
            </option>
            <option value={JSON.stringify({ price: -1 })}>
              Price: High to Low
            </option>
            <option value={JSON.stringify({ name: 1 })}>Name: A - Z</option>
            <option value={JSON.stringify({ name: -1 })}>Name: Z - A</option>
          </select>
        </div>

        <div className="py-3">
          <label className="block mb-2 text-sm font-semibold text-gray-500 uppercase dark:text-gray-300">
            Price Range
          </label>
          <label
            htmlFor="min"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Minimum price:
          </label>
          <input
            type="number"
            id="min"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="10"
            onChange={(e) => setMinPrice(e.target.value)}
            min={0}
          />
          <label
            htmlFor="max"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
          >
            Maximum price:
          </label>
          <input
            type="number"
            id="max"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="100000"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        <div className="py-3">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-semibold text-gray-500 uppercase dark:text-gray-300"
          >
            Category Filter
          </label>
          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="py-3">
          <label
            htmlFor="brands"
            className="block mb-2 text-sm font-semibold text-gray-500 uppercase dark:text-gray-300"
          >
            Brands Filter
          </label>
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center gap-2 mb-1 ml-1">
              <input
                id={brand}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-600 dark:border-gray-500"
                onChange={() => handleBrandsFilterChange(brand)}
              />
              <label
                htmlFor={brand}
                className="w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>

        <div className="py-4">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={setFilter}
          >
            Apply filters
          </button>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            onClick={resetFilter}
          >
            Reset filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;
