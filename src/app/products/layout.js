const ProductsLayout = async ({ children }) => {
  return (
    <div>
      {children}
      <h1 className="text-3xl py-5">Related products</h1>
    </div>
  );
};

export default ProductsLayout;
