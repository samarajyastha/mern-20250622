import {
  ABOUT_ROUTE,
  BLOGS_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  ORDERS_ROUTE,
  PRODUCTS_ROUTE,
} from "./routes";

const navLinks = [
  {
    route: HOME_ROUTE,
    label: "Home",
  },
  {
    route: ABOUT_ROUTE,
    label: "About us",
  },
  {
    route: PRODUCTS_ROUTE,
    label: "Products",
  },
  {
    route: ORDERS_ROUTE,
    label: "Orders",
  },
  {
    route: CONTACT_ROUTE,
    label: "Contact",
  },
];

export default navLinks;
