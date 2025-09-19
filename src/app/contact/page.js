import { FaMapMarkedAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";

export const metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work with us? Fill out the form below and
            we&apos;ll get back to you as soon as possible.
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4" />
        </div>
        <div className="md:flex">
          <div className="md:w-2/5 mb-10 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="flex items-start mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <FaMapMarkedAlt className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  Address
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  123 Business Ave, Suite 100
                  <br />
                  San Francisco, CA 94107
                </p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <FaPhone className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  Phone
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <FaEnvelope className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  Email
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  hello@companyname.com
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h4 className="font-medium text-gray-800 dark:text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-primary text-gray-600 dark:text-gray-300 p-3 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-primary text-gray-600 dark:text-gray-300 p-3 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-primary text-gray-600 dark:text-gray-300 p-3 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-primary text-gray-600 dark:text-gray-300 p-3 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-3/5 md:pl-16">
            <form className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 dark:text-white">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Type your message here..."
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-opacity-90 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
