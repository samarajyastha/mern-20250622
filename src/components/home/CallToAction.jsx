const CallToAction = () => {
  return (
    <section className="py-16 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">
            Join Our Newsletter
          </h2>
          <p className="text-center text-slate-200">
            Subscribe to get the latest updates on our new arrivals and special
            offers.
          </p>
        </div>
        <form className="flex flex-col md:flex-row gap-3 justify-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-lg text-white border lg:w-1/3 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <button
            type="submit"
            className="bg-secondary px-8 py-3 rounded-lg text-white font-medium hover:bg-secondary/90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
