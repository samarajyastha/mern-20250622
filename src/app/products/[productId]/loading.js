import Spinner from "@/components/Spinner";

const ProductByIdLoading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Spinner className="w-14 h-14 fill-secondary" />
    </div>
  );
};

export default ProductByIdLoading;
