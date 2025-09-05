import AuthMenu from "./AuthMenu";
import CartButton from "./CartButton";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  return (
    <header className="shadow sticky top-0 bg-white z-50 dark:bg-slate-900 dark:text-white">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <Logo />
          <NavMenu />

          <div className="flex items-center gap-3">
            <ToggleTheme />
            <CartButton />
            <AuthMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
