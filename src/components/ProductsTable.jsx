import { useEffect, useState } from "react";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://node-20250302.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length == 0) return <div>Loading....</div>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
