"use client";

import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const { theme } = useSelector((state) => state.userPreferences);

  return <div className={theme}>{children}</div>;
};

export default MainLayout;
