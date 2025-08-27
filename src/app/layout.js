import { ToastContainer } from "react-toastify";
import AppProvider from "@/redux/provider";
import config from "@/config";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";
import MainLayout from "@/layouts/MainLayout";

export const metadata = {
  title: {
    default: config.appName,
    template: `%s | ${config.appName}`,
  },
  description: "E-commerce website for all electronic items",
  keywords: "Online shopping in Nepal, Best electronic products online",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <MainLayout>
            <Header />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}

export default RootLayout;
