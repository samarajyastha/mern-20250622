import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import AuthMenu from "./AuthMenu";

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
            <AuthMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
