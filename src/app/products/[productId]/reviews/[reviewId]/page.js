const ProductReview = async ({ params }) => {
  const productId = (await params).productId;
  const reviewId = (await params).reviewId;

  return (
    <div>
      <h1 className="text-4xl">ProductId: {productId}</h1>
      <h2>ProductReview: {reviewId}</h2>
    </div>
  );
};

export default ProductReview;
