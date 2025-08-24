const ProductsLayout = async ({ children }) => {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-4 py-10">
        <div className="min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default ProductsLayout;
