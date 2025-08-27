"use client";
import { LOGIN_ROUTE } from "@/constants/routes";
import { useSelector } from "react-redux";
import Link from "next/link";

const AuthMenu = () => {
  const { user } = useSelector((state) => state.auth);

  function logout() {}

  if (user)
    return (
      <button
        onClick={logout}
        className="text-sm text-secondary border-secondary border-2 rounded-3xl px-4 py-1 hover:bg-secondary hover:text-white transition"
      >
        Logout
      </button>
    );

  return (
    <Link
      href={LOGIN_ROUTE}
      className="text-sm text-secondary border-secondary border-2 rounded-3xl px-4 py-1 hover:bg-secondary hover:text-white transition"
    >
      Login
    </Link>
  );
};

export default AuthMenu;
