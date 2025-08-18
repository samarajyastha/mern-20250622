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
        <header>This is header</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}

export default RootLayout;
