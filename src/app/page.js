import CallToAction from "@/components/home/CallToAction";
import Categories from "@/components/home/Categories";
import Contact from "@/components/home/Contact";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import PopularProducts from "@/components/home/PopularProducts";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";
import bg from "@/assets/images/bg.jpg";

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Contact />
      <PopularProducts />
      <CallToAction />
      <Categories />
      <Testimonials />
      <Image
        height={1200}
        width={1400}
        src={bg}
        alt=""
        className="h-svh w-full object-cover fixed top-0 left-0 -z-50"
      />
    </main>
  );
};

export default Home;
