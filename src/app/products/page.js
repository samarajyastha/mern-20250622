import { getBrands, getCategories, getProducts } from "@/api/products";
import FilterButton from "./_components/FilterButton";
import SearchBar from "./_components/SearchBar";
import ListGridView from "./_components/ListGridView";
import Table from "./_components/Table";

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
      <div className="flex flex-col items-center justify-between py-5 md:flex-row">
        <h1 className="text-3xl md:text-4xl py-5 font-medium dark:text-white">
          Popular Products
        </h1>
        <div className="flex items-center gap-4">
          <SearchBar />
          <FilterButton brands={brands} categories={categories} />
          <ListGridView />
        </div>
      </div>
      {products?.length == 0 ? (
        <div className="mx-auto w-full py-10 my-5 rounded-xl bg-secondary/10 text-secondary text-2xl text-center">
          Products not available!
        </div>
      ) : (
        <Table products={products} />
      )}
    </>
  );
};

export default Products;
