// react icons
import { Link } from "react-router-dom";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 shadow-md rounded-t-2xl w-full p-6 md:p-9">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full justify-items-center text-center sm:text-left">
        
        {/* Services */}
        <div>
          <h3 className="text-lg md:text-xl dark:text-[#abc2d3] font-semibold text-[#424242] mb-4">Services</h3>
          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-base dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-colors duration-200">My Account</p>
            <p className="text-sm md:text-base dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-colors duration-200">Deliveries</p>
            <p className="text-sm md:text-base dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-colors duration-200">FAQ</p>
            <p className="text-sm md:text-base dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-colors duration-200">Track Order</p>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg md:text-xl dark:text-[#abc2d3] font-semibold text-[#424242] mb-4">Products</h3>
          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-base dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-colors duration-200">Brands</p>
            <p className="text-sm md:text-base dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-colors duration-200">New Arrivals</p>
            <p className="text-sm md:text-base dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-colors duration-200">Best Sellers</p>
            <p className="text-sm md:text-base dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-colors duration-200">Promotions</p>
          </div>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg md:text-xl dark:text-[#abc2d3] font-semibold text-[#424242] mb-4">About Us</h3>
          <div className="flex flex-col gap-2">
            <Link to="/about-us" className="text-sm md:text-base dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-colors duration-200">Our Story</Link>
            <Link to="/contact-us" className="text-sm md:text-base dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-colors duration-200">Contact Us</Link>
            <p className="text-sm md:text-base dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-colors duration-200">Terms & Conditions</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 dark:border-slate-700 pt-6 mt-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 text-center md:text-left">
        
        <img src="/logo.png" alt="logo" className="w-[130px] mx-auto md:mx-0"/>

        <p className="text-sm md:text-base text-gray-600 dark:text-slate-500">
          © 2025 Beauty Cosmetics. All Rights Reserved.
        </p>

        <div className="flex items-center justify-center md:justify-start gap-3">
          <a className="text-2xl p-2 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-slate-400 transition-colors duration-300">
            <CgFacebook />
          </a>
          <a className="text-2xl p-2 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-slate-400 transition-colors duration-300">
            <BsTwitter />
          </a>
          <a className="text-2xl p-2 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-slate-400 transition-colors duration-300">
            <BsInstagram />
          </a>
          <a className="text-2xl p-2 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-slate-400 transition-colors duration-300">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}