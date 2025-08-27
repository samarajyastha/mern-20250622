"use client";

import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="••••••••"
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...props}
      />
      <button
        type="button"
        className="absolute top-3 right-2 pt-0.5 px-1 dark:text-white"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
      </button>
    </div>
  );
};

export default PasswordInput;
