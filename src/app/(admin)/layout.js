"use client";

import { allowedAdminRoles } from "@/helpers/auth";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Spinner from "@/components/Spinner";

const AdminLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  const allowedRoles = allowedAdminRoles(user?.roles);

  const router = useRouter();

  useEffect(() => {
    if (!user) return router.push(LOGIN_ROUTE);

    if (!allowedRoles) router.push(HOME_ROUTE);
  });

  if (!user || !allowedRoles)
    return (
      <div className="flex justify-center py-20">
        <Spinner className="w-12 h-12 fill-primary" />
      </div>
    );

  return <div>{children}</div>;
};

export default AdminLayout;
