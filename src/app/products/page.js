import { getProducts } from "@/api/products";
import ProductCard from "./_components/Card";

export const metadata = {
  title: "Products",
  keywords: "Best online electronics products",
};

const Products = async () => {
  const response = await getProducts();

  const products = response.data;

  return (
    <>
      <h1 className="text-4xl py-5 font-medium">Popular Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
