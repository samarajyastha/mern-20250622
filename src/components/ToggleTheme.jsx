"use client";
import { toggleTheme } from "@/redux/userPreferences/userPreferenceSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { LIGHT_THEME } from "@/constants/theme";

const ToggleTheme = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.userPreferences);

  return (
    <button
      onClick={() => {
        dispatch(toggleTheme());
      }}
    >
      {theme == LIGHT_THEME ? <AiOutlineSun /> : <AiOutlineMoon />}
    </button>
  );
};

export default ToggleTheme;
