"use client";
import { LOGIN_ROUTE } from "@/constants/routes";
import { logoutUser } from "@/redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AuthMenu = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const router = useRouter();

  function logout() {
    dispatch(logoutUser());

    router.push(LOGIN_ROUTE);
  }

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
