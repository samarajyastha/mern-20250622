"use client";

import { GRID_VIEW } from "@/constants/productView";
import { toggleProductView } from "@/redux/userPreferences/userPreferenceSlice";
import { MdFormatListBulleted, MdOutlineGridView } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const ListGridView = () => {
  const dispatch = useDispatch();

  const { productView } = useSelector((state) => state.userPreferences);

  return (
    <button
      className="bg-gray-200 dark:bg-gray-600 dark:text-white p-2 rounded"
      onClick={() => dispatch(toggleProductView())}
    >
      {productView == GRID_VIEW ? (
        <MdFormatListBulleted className="w-5 h-5" />
      ) : (
        <MdOutlineGridView className="w-5 h-5" />
      )}
    </button>
  );
};

export default ListGridView;
