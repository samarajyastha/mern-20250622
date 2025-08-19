const ProductDetails = async ({ params }) => {
  const productId = (await params).productId;

//   const product = await fetch(
//     `https://node-20250302.vercel.app/api/products/${productId}`
//   ).then((res) => res?.json());

  return (
    <div>
      <h1 className="text-4xl">ProductDetails: {productId}</h1>
      {/* <ul>
        <li>Name: {product.name}</li>
        <li>Price: {product.price}</li>
        <li>Brand: {product.brand}</li>
        <li>Description: {product.description}</li>
      </ul> */}
    </div>
  );
};

export default ProductDetails;
