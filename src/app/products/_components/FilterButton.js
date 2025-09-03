"use client";

import { useState } from "react";
import { MdOutlineFilterAlt } from "react-icons/md";
import FilterDrawer from "./FilterDrawer";

const FilterButton = ({ brands, categories }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowFilter(!showFilter)}
        className="bg-secondary text-white px-4 py-1 rounded-md flex items-center gap-1 hover:bg-secondary/80"
      >
        Filter <MdOutlineFilterAlt />
      </button>
      <FilterDrawer
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        brands={brands}
        categories={categories}
      />
    </>
  );
};

export default FilterButton;
