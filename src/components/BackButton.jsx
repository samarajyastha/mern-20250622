"use client";
import { useRouter } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";

const BackButton = () => {
  const router = useRouter();

  function onClickBack() {
    router.back();
  }

  return (
    <button className="flex items-center gap-2 mb-4 cursor-pointer text-gray-700 dark:text-gray-300" onClick={onClickBack}>
      <GoArrowLeft />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
