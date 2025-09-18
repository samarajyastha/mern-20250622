"use client";
import { LOGIN_ROUTE } from "@/constants/routes";
import { logoutUser } from "@/redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { useState } from "react";
import UserPopup from "./UserPopup";

const AuthMenu = () => {
  const { user } = useSelector((state) => state.auth);

  const [showPopup, setShowPopup] = useState(false);

  if (user)
    return (
      <div className="relative">
        <button className="ml-2 " onClick={() => setShowPopup(true)}>
          {user.profileImageUrl ? (
            <Image
              src={user.profileImageUrl}
              alt=""
              height={64}
              width={64}
              className="h-8 w-8 rounded-full object-cover"
            />
          ) : (
            <FaUser className="h-8 w-8 rounded-full p-1 bg-gray-200 text-gray-700" />
          )}
        </button>
        {showPopup && <UserPopup user={user} setShowPopup={setShowPopup} />}
      </div>
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
