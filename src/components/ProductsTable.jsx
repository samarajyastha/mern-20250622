import { useEffect, useState } from "react";
import { Link } from "react-router";

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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.price}</td>
              <td>
                <Link to={product.id}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
