import Spinner from "@/components/Spinner";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Spinner className="h-12 w-12 fill-primary"/>
    </div>
  );
};

export default Loading;
