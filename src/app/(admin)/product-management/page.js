import ProductsTable from "./_components/Table";

const ProductManagement = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-2xl">
      <h2 className="font-semibold text-2xl text-gray-700 dark:text-white mb-5">
        Product Management
      </h2>
      <ProductsTable />
    </div>
  );
};

export default ProductManagement;
