"use client";

import { useSelector } from "react-redux";
import ProductCard from "./Card";
import { GRID_VIEW } from "@/constants/productView";

const Table = ({ products }) => {
  const { productView } = useSelector((state) => state.userPreferences);

  return (
    <div
      className={
        productView == GRID_VIEW
          ? `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5`
          : `grid grid-cols-1 gap-5`
      }
    >
      {products.map((product, index) => (
        <ProductCard key={index} product={product} productView={productView} />
      ))}
    </div>
  );
};

export default Table;
