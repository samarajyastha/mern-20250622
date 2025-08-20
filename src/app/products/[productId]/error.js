"use client";

const ProductByIdError = ({ error }) => {
  return <div className="py-5 text-center text-red-500">{error.message}</div>;
};

export default ProductByIdError;
