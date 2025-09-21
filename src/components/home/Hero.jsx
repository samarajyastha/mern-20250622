import heroImg from "@/assets/images/hero.png";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="py-16 md:py-24 bg-gradient-to-r from-primary via-purple-800 to-secondary"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          {/* Content  */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              New Amazing Products
            </h1>
            <p className="text-xl mb-8 text-white">
              Shop today and get
              <span className="font-semibold">20% discount</span>
            </p>
            <div className="flex flex-col md:flex-row gap-y-3 gap-x-5">
              <Link
                href={PRODUCTS_ROUTE}
                className="font-medium bg-white text-primary px-6 py-3 rounded-lg text-center hover:underline transition shadow-xl"
              >
                Shop Now
              </Link>
              <Link
                href={PRODUCTS_ROUTE}
                className="border-2 border-white text-white px-6 py-3 rounded-lg text-center hover:underline transition shadow-xl"
              >
                View Categories
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src={heroImg}
              className="max-w-full h-auto rounded-xl shadow-xl lg:w-3/4 float-right"
              alt=""
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
