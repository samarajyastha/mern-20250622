import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-100 shadow-md py-3 px-4 rounded-xl">
      <h2 className="text-2xl font-semibold">
        <Link href={`/products/${product.id}`}>{product.name}</Link>
      </h2>
      <div className="flex items-center gap-2 text-sm py-2">
        <span className="bg-green-200 text-green-600 px-3 rounded">
          {product.brand}
        </span>
        <span className="bg-blue-200 text-blue-600 px-3 rounded">
          {product.category}
        </span>
      </div>
      <p className="text-lg py-2">Rs.{product.price}</p>
      <button className="px-3 py-1 rounded-md bg-blue-600 text-white shadow">
        Add to Cart +
      </button>
    </div>
  );
};

export default ProductCard;
