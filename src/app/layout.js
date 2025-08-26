import config from "@/config";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";

import "./globals.css";

export const metadata = {
  title: {
    default: config.appName,
    template: `%s | ${config.appName}`,
  },
  description: "E-commerce website for all electronic items",
  keywords: "Online shopping in Nepal, Best electronic products online",
};

function RootLayout({ children }) {
  console.log(config.appName);
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}

export default RootLayout;
