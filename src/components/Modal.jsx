"use client";
import { IoMdClose } from "react-icons/io";

const Modal = ({
  showModal,
  setShowModal,
  label,
  icon,
  info,
  confirmAction,
}) => {
  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className={showModal ? "" : "hidden"}>
      <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full min-h-screen">
        <div className="bg-black fixed top-0 left-0 right-0 bottom-0 opacity-20"></div>
        <div className="relative bg-white w-max min-w-md rounded-lg shadow-sm dark:bg-gray-700">
          <button
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={closeModal}
          >
            <IoMdClose className="w-5 h-5" />
          </button>
          <div className="p-4 md:p-5 text-center">
            {icon}
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {label}
            </h3>
            {info}
            {confirmAction}
            <button
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={closeModal}
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
