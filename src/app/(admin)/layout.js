"use client";

import { LOGIN_ROUTE } from "@/constants/routes";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Spinner from "@/components/Spinner";
import Sidebar from "./_components/Sidebar";

const AdminLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user) return router.push(LOGIN_ROUTE);
  }, []);

  if (!user)
    return (
      <div className="flex justify-center py-20">
        <Spinner className="w-12 h-12 fill-primary" />
      </div>
    );

  return (
    <div className="relative lg:pl-64">
      <Sidebar />
      <section className="bg-gray-50 dark:bg-gray-800 min-h-screen py-4 sm:py-8">
        {children}
      </section>
    </div>
  );
};

export default AdminLayout;
