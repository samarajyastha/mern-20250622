import { HOME_ROUTE } from "@/constants/routes";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-[85vh] flex-col">
      <h2 className="text-8xl font-bold">
        4<span className="text-9xl text-red-500">0</span>4
      </h2>
      <h1 className="text-4xl font-bold ">Page Not Found</h1>
      <Link href={HOME_ROUTE} className="mt-4 text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
