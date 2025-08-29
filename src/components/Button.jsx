import Spinner from "./Spinner";

const Button = ({
  label,
  loading = false,
  type = "submit",
  className = "w-full bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90",
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`relative text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${className}`}
    >
      {label}
      {loading && (
        <Spinner className="w-5 h-5 fill-primary/80 absolute right-3 top-2.5" />
      )}
    </button>
  );
};

export default Button;
