"use client";

import { PRODUCTS_ROUTE } from "@/constants/routes";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const SearchBar = () => {
  const [productName, setProductName] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  function searchProduct(e) {
    if (e.key != "Enter") return;

    const params = new URLSearchParams(searchParams.toString());

    params.set("name", productName);
    router.push(`?${params.toString()}`);
  }

  function clearSearch() {
    setProductName("");
    router.push(PRODUCTS_ROUTE);
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <FaMagnifyingGlass className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </div>
      <input
        type="text"
        id="search"
        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
        placeholder="Search for products ..."
        onChange={(e) => setProductName(e.target.value)}
        onKeyDown={searchProduct}
        value={productName}
      />
      <div className="absolute top-0 right-3">
        {productName != "" && (
          <button className="text-red-500 w-4 h-4 p-1" onClick={clearSearch}>
            <MdClose />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
