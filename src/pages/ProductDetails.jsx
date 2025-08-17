import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetailsPage = () => {
  const params = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    if (!params.id) return;

    fetch(`https://node-20250302.vercel.app/api/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [params]);

  if (!product) return <>Loading...</>;

  return (
    <div>
      <h1>Product details</h1>

      <ul>
        <li>Name: {product.name}</li>
        <li>brand: {product.brand}</li>
        <li>category: {product.category}</li>
        <li>price: {product.price}</li>
      </ul>
    </div>
  );
};

export default ProductDetailsPage;
