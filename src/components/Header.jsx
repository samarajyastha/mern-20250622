import Link from "next/link";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { LOGIN_ROUTE } from "@/constants/routes";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <header className="shadow sticky top-0 bg-white z-50">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <Logo />
          <NavMenu />

          <div className="flex items-center gap-3">
            <div className="text-sm">
              <MdOutlineAddShoppingCart />
            </div>
            <Link
              href={LOGIN_ROUTE}
              className="text-sm text-secondary border-secondary border-2 rounded-3xl px-4 py-1 hover:bg-secondary hover:text-white transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
