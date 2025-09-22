import BackButton from "@/components/BackButton";
import ProductForm from "../_components/Form";

const AddProduct = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-2xl">
        <BackButton />
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <ProductForm />
      </div>
    </section>
  );
};

export default AddProduct;
