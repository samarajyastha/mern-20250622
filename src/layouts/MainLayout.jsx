import { Outlet } from "react-router";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>All rights reserved.</footer>
    </>
  );
};

export default MainLayout;
