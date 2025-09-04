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
        className="bg-primary text-white px-4 py-1.5 rounded-md flex items-center gap-1 hover:bg-primary/80"
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
