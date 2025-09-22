import Image from "next/image";
import bg from "@/assets/images/registration-bg.jpg";

const Contact = () => {
  return (
    <section className="py-16 relative">
      <Image
        src={bg}
        alt=""
        className="w-full h-full object-cover absolute top-0 -z-20"
        height={900}
        width={1200}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 -z-10" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-semibold text-white uppercase tracking-[0.25rem] mb-4">
              Dress to Impress
            </h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum ipsum adipisci dolore vitae commodi, officiis rerum
              mollitia quas sint? Excepturi corporis voluptas atque hic suscipit
              dignissimos eos at in beatae.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 dark:text-gray-100 rounded-2xl px-8 py-10 lg:w-3/4 shadow-md shadow-gray-600 mx-auto">
            <h3 className="text-3xl font-bold text-center mb-4">
              Contact form
            </h3>
            <form>
              <div className="pb-2">
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  required
                  className="w-full py-2 px-3 rounded-md border-2 border-zinc-300 focus:outline-none focus:ring-2 focus:ring-secondary mt-1"
                />
              </div>
              <div className="pb-2">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  required
                  className="w-full py-2 px-3 rounded-md border-2 border-zinc-300 focus:outline-none focus:ring-2 focus:ring-secondary mt-1"
                />
              </div>
              <div className="pb-2">
                <label htmlFor="phone">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your phone number"
                  required
                  className="w-full py-2 px-3 rounded-md border-2 border-zinc-300 focus:outline-none focus:ring-2 focus:ring-secondary mt-1"
                />
              </div>
              <div className="pb-2">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  required
                  className="w-full py-2 px-3 rounded-md border-2 border-zinc-300 focus:outline-none focus:ring-2 focus:ring-secondary mt-1"
                />
              </div>
              <div className="pb-2">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="w-full py-2 px-3 rounded-md border-2 border-zinc-300 focus:outline-none focus:ring-2 focus:ring-secondary mt-1"
                  defaultValue={""}
                />
              </div>
              <input
                type="submit"
                defaultValue="Send message"
                className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-primary/90"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
