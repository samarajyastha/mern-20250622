import { getProducts } from "@/api/products";
import ProductCard from "./Card";
import { GRID_VIEW } from "@/constants/productView";

const Related = async ({ category }) => {
  const response = await getProducts({ category });

  const products = response.data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} productView={GRID_VIEW} />
      ))}
    </div>
  );
};

export default Related;
