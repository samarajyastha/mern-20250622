import Image from "next/image";
import { FaStar } from "react-icons/fa6";

import user1 from "@/assets/images/customers/1.jpg";
import user2 from "@/assets/images/customers/2.jpg";
import user3 from "@/assets/images/customers/3.jpg";
import user4 from "@/assets/images/customers/4.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Hear from our satisfied customers what they have to say about us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition p-6">
            <div className="text-slate-500 text-xl">
              <i className="fa fa-quote-right" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              error iure qui sapiente impedit. Iusto earum nisi dolorem soluta
              eius adipisci repellat, ipsum quaerat explicabo eos magnam maxime
              laudantium impedit, repellendus nobis ad! Animi quibusdam
              deleniti, deserunt tempora quo nesciunt!
            </p>
            <div className="text-yellow-500 text-sm py-3 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex items-center gap-3">
              <Image
                height={64}
                width={64}
                src={user1}
                alt=""
                className="h-12 w-12 object-cover rounded-full border border-slate-400"
              />
              <div>
                <h4 className="font-semibold">Micheal Jackson</h4>
                <p className="text-xs text-slate-500">Satisfied customer</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition p-6">
            <div className="text-slate-500 text-xl">
              <i className="fa fa-quote-right" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              error iure qui sapiente impedit. Iusto earum nisi dolorem soluta
              eius adipisci repellat, ipsum quaerat explicabo eos magnam maxime
              laudantium impedit, repellendus nobis ad! Animi quibusdam
              deleniti, deserunt tempora quo nesciunt!
            </p>
            <div className="text-yellow-500 text-sm py-3 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex items-center gap-3">
              <Image
                height={64}
                width={64}
                src={user2}
                alt=""
                className="h-12 w-12 object-cover rounded-full border border-slate-400"
              />
              <div>
                <h4 className="font-semibold">Sarah Jameson</h4>
                <p className="text-xs text-slate-500">Satisfied customer</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition p-6">
            <div className="text-slate-500 text-xl">
              <i className="fa fa-quote-right" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              error iure qui sapiente impedit. Iusto earum nisi dolorem soluta
              eius adipisci repellat, ipsum quaerat explicabo eos magnam maxime
              laudantium impedit, repellendus nobis ad! Animi quibusdam
              deleniti, deserunt tempora quo nesciunt!
            </p>
            <div className="text-yellow-500 text-sm py-3 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex items-center gap-3">
              <Image
                height={64}
                width={64}
                src={user3}
                alt=""
                className="h-12 w-12 object-cover rounded-full border border-slate-400"
              />
              <div>
                <h4 className="font-semibold">Jonathan White</h4>
                <p className="text-xs text-slate-500">Satisfied customer</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition p-6">
            <div className="text-slate-500 text-xl">
              <i className="fa fa-quote-right" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              error iure qui sapiente impedit. Iusto earum nisi dolorem soluta
              eius adipisci repellat, ipsum quaerat explicabo eos magnam maxime
              laudantium impedit, repellendus nobis ad! Animi quibusdam
              deleniti, deserunt tempora quo nesciunt!
            </p>
            <div className="text-yellow-500 text-sm py-3 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex items-center gap-3">
              <Image
                height={64}
                width={64}
                src={user4}
                alt=""
                className="h-12 w-12 object-cover rounded-full border border-slate-400"
              />
              <div>
                <h4 className="font-semibold">Scarlett Johansson</h4>
                <p className="text-xs text-slate-500">Satisfied customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
