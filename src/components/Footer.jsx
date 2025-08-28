import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";
import Logo from "./Logo";
import Image from "next/image";

import esewa from "@/assets/images/payments/esewa.svg";
import khalti from "@/assets/images/payments/khalti.png";
import fonepay from "@/assets/images/payments/fonepay.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-primary-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-b-slate-600 pb-16 mb-5">
          <div>
            <Logo />
            <p className="text-sm text-slate-400 py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nemo veniam tenetur non eius. Dicta non quos tenetur
              quisquam porro?
            </p>
            <div className="flex gap-2">
              <a href="#" className="text-slate-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-slate-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-slate-300">
                <FaYoutube />
              </a>
              <a href="#" className="text-slate-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Shop</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-sm text-slate-300">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm text-slate-300">
                  Popular
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm text-slate-300">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm text-slate-300">
                  Sale Items
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-3">We Accept</h3>
            <div className="flex items-start flex-col gap-3">
              <Image
                src={esewa}
                className="h-10 bg-white rounded px-5 py-2 w-auto"
                height={50}
                width={100}
                alt="esewa"
              />
              <Image
                src={khalti}
                className="h-10 bg-white rounded px-5 py-2 w-auto"
                height={50}
                width={100}
                alt="khalti"
              />
              <Image
                src={fonepay}
                className="h-10 bg-white rounded px-5 py-2 w-auto"
                height={50}
                width={100}
                alt="fonepay"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Contact Us</h3>
            <ul>
              <li className="text-sm text-slate-300 mb-1">
                <i className="fa fa-envelope" />
                <span className="ml-1">info@shopnest.com</span>
              </li>
              <li className="text-sm text-slate-300 mb-1">
                <i className="fa fa-map-marker-alt" />
                <span className="ml-1">22nd Street, Manhattan, NYC</span>
              </li>
              <li className="text-sm text-slate-300 mb-1">
                <i className="fa fa-phone" />
                <span className="ml-1">(+01) 4581618761</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-400 text-sm">Copyright © 2025 ShopNest.</p>
          <div className="flex gap-5 mt-3 md:mt-0">
            <a href="#" className="text-sm text-slate-400 hover:underline">
              Privary Policy
            </a>
            <a href="#" className="text-sm text-slate-400 hover:underline">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
