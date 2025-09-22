import { getProductById } from "@/api/products";
import ProductForm from "../../_components/Form";
import BackButton from "@/components/BackButton";

const EditProduct = async ({ params }) => {
  const id = (await params).id;

  const response = await getProductById(id);

  const product = response.data;

  return (
    <section>
      <div className="px-4 mx-auto max-w-2xl">
        <BackButton />
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit product
        </h2>
        <ProductForm product={product} isEditing={true} />
      </div>
    </section>
  );
};

export default EditProduct;
