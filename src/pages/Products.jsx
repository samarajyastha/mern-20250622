import { useSearchParams } from "react-router";
import ProductsTable from "../components/ProductsTable";

const ProductsPage = () => {
  const [query] = useSearchParams();

  const brand = query.get("brand");
  const category = query.get("category");

  return (
    <section>
      <h1>Products Page</h1>
      <p>Brand: {brand}</p>
      <p>Category: {category}</p>

      <ProductsTable />
    </section>
  );
};

export default ProductsPage;
