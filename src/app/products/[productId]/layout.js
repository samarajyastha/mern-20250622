const ProductByIdLayout = async ({ children, params }) => {
  console.log(await params);

  return <div>{children}</div>;
};

export default ProductByIdLayout;
