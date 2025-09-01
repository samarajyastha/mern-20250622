import ProductsTable from "./_components/Table";

const ProductManagement = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-4 sm:py-8">
      <div className="px-4 mx-auto max-w-screen-2xl">
        <h2 className="font-semibold text-2xl text-gray-700 mb-5">
          Product Management
        </h2>
        <ProductsTable />
      </div>
    </section>
  );
};

export default ProductManagement;
