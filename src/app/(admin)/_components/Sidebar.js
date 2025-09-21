"use client";
import {
  DASHBOARD_ROUTE,
  ORDER_MANAGEMENT_ROUTE,
  PRODUCT_MANAGEMENT_ROUTE,
  PROFILE_ROUTE,
  USER_MANAGEMENT_ROUTE,
} from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLuggageCart, FaShoppingBasket, FaUserCog } from "react-icons/fa";
import { FaChartPie, FaUsers } from "react-icons/fa6";

const adminMenu = [
  {
    route: DASHBOARD_ROUTE,
    label: "Dashboard",
    icon: <FaChartPie />,
  },
  {
    route: PRODUCT_MANAGEMENT_ROUTE,
    label: "Product Management",
    icon: <FaShoppingBasket />,
  },
  {
    route: ORDER_MANAGEMENT_ROUTE,
    label: "Order Management",
    icon: <FaLuggageCart />,
  },
  {
    route: USER_MANAGEMENT_ROUTE,
    label: "User Management",
    icon: <FaUsers />,
  },
  {
    route: PROFILE_ROUTE,
    label: "Profile",
    icon: <FaUserCog />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block w-64 bg-white absolute top-0 left-0 h-full z-20 border-r border-gray-300 dark:bg-gray-900 dark:border-gray-700">
      <div className="p-4 flex flex-col gap-1">
        {adminMenu.map((menu) => {
          const isActive = pathname.startsWith(menu.route);

          return (
            <Link
              key={menu.route}
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-primary/5 text-gray-700 dark:text-white dark:bg-gray-700"
              }`}
              href={menu.route}
            >
              {menu.icon}
              {menu.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
