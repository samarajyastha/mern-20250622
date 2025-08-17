import { BrowserRouter, Route, Routes } from "react-router";
import AboutPage from "./pages/About";
import App from "./App";
import AuthLayout from "./layouts/AuthLayout";
import ContactPage from "./pages/Contact";
import LoginPage from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import ProductDetailsPage from "./pages/ProductDetails";
import ProductsPage from "./pages/Products";
import RegisterPage from "./pages/Register";

import "./index.css";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<App />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />

          <Route path="products">
            <Route index element={<ProductsPage />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>

          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>Page not found.</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
