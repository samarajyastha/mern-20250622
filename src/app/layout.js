import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Dokan",
  description: "E-commerce website",
  keywords: "online shopping,e-commerce, buy and sell",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="shadow">
          <div className="container px-4 mx-auto py-2">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Dokan</h1>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="products"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="about"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="contact"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer>This is footer</footer>
      </body>
    </html>
  );
}

export default RootLayout;
