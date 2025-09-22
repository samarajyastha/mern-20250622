"use client";

import { HOME_ROUTE } from "@/constants/routes";
import { allowedAdminRoles } from "@/helpers/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ManagementLayout({ children }) {
  const { user } = useSelector((state) => state.auth);

  const allowedRoles = allowedAdminRoles(user?.roles);

  const router = useRouter();

  useEffect(() => {
    if (!allowedRoles) router.push(HOME_ROUTE);
  },[]);

  return <div>{children}</div>;
}
