const ProductsLayout = async ({ children }) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 pb-16">
        <div className="min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default ProductsLayout;
