function AuthLayout({ children }) {
  return (
    <div>
      <h1 className="text-2xl text-green-600 bg-green-100 text-center rounded-2xl">
        Welcome to Dokan
      </h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim placeat
        veniam ducimus cupiditate aliquid voluptatum. Quae ipsa accusamus est
        explicabo?
      </p>
      {children}
    </div>
  );
}

export default AuthLayout;
