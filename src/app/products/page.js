import { getBrands, getCategories, getProducts } from "@/api/products";
import ProductCard from "./_components/Card";
import FilterButton from "./_components/FilterButton";

export const metadata = {
  title: "Products",
  keywords: "Best online electronics products",
};

const Products = async ({ searchParams }) => {
  const response = await getProducts(await searchParams);
  const brandResponse = await getBrands();
  const categoryResponse = await getCategories();

  const products = response.data;
  const brands = brandResponse.data;
  const categories = categoryResponse.data;

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl py-5 font-medium dark:text-white">
          Popular Products
        </h1>
        <FilterButton brands={brands} categories={categories} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
