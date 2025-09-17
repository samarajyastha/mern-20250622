"use client";
import {
  DASHBOARD_ROUTE,
  ORDER_MANAGEMENT_ROUTE,
  PRODUCT_MANAGEMENT_ROUTE,
  USER_MANAGEMENT_ROUTE,
} from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const adminMenu = [
  {
    route: DASHBOARD_ROUTE,
    label: "Dashboard",
  },
  {
    route: PRODUCT_MANAGEMENT_ROUTE,
    label: "Product Management",
  },
  {
    route: ORDER_MANAGEMENT_ROUTE,
    label: "Order Management",
  },
  {
    route: USER_MANAGEMENT_ROUTE,
    label: "User Management",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block w-64 bg-white absolute top-0 left-0 h-full z-20 border-r border-gray-300 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-2 py-4 flex flex-col gap-1">
        {adminMenu.map((menu) => {
          const isActive = pathname.startsWith(menu.route);

          return (
            <Link
              key={menu.route}
              className={`px-3 py-1 rounded-md ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-primary/5 text-gray-700 dark:text-white dark:bg-gray-700"
              }`}
              href={menu.route}
            >
              {menu.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
