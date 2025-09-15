"use client";

import { LOGIN_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function OrderLayout({ children }) {
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  if (!user) router.push(LOGIN_ROUTE);

  return (
    <div className="bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 pb-16">
        <div className="min-h-screen">{children}</div>
      </div>
    </div>
  );
}
