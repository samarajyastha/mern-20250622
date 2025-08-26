import Logo from "@/components/Logo";

function AuthLayout({ children }) {
  return (
    <section className="flex py-20 md:items-center justify-center bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-start items-center flex-col">
          <Logo className="text-4xl mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center w-fit bg-white rounded-2xl shadow-md lg:max-w-2/3 xl:max-w-1/2">
            <div className="hidden md:flex bg-gradient-to-b from-primary via-purple-800 to-secondary h-full rounded-l-2xl py-10  justify-center flex-col">
              <div className="text-center px-8">
                <h2 className="text-white text-4xl font-semibold mb-5">
                  Welcome!
                </h2>
                <p className="text-gray-200">
                  Great news! Your favorite item is back in stock. Don&apos;t
                  miss out, order now before it sells out again!
                </p>
              </div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
