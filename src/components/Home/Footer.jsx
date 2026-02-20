// react icons
import { Link } from "react-router-dom";
import {CgFacebook} from "react-icons/cg";
import {BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";

export default function Footer() {
  
  return (
    <footer className="bg-white dark:bg-slate-900 shadow-md rounded-t-2xl w-full p-6 md:p-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full justify-items-center">

                <div className="">
                    <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-[#424242] mb-2">Services</h3>
                    <div className="flex text-black flex-col gap-[10px]">
                        <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">UI
                            Components</p>
                        <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Website
                            Templates</p>
                        <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Icons</p>
                        <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Opacity
                            Palette</p>
                    </div>
                </div>


                <div>
                    <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-[#424242] mb-2">Products</h3>
                    <div className="flex text-black flex-col gap-[10px]">
                        <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Service</p>
                        <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Features</p>
                        <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Our
                            Team</p>
                        <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Portfolio</p>
                        
                    </div>
                </div>


                <div>
                    <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-[#424242] mb-2">About Us</h3>
                    <div className="flex text-black flex-col gap-[10px]">
                        <Link to="/about-us" className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Our story</Link>
                        <Link to="/contact-us" className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Contact Us</Link>
                    </div>
                </div>

                
            </div>

            <div
                className="border-t border-gray-200 dark:border-slate-700 pt-[20px] mt-[40px] flex items-center justify-between w-full flex-wrap gap-[20px]">
                <img src="https://i.ibb.co/ZHYQ04D/footer-logo.png" alt="logo"
                     className="w-[130px]"/>

                <p className="text-[0.9rem] text-gray-600 dark:text-slate-500">© 2025 Beauty Cosmetics. All Rights
                    Reserved. </p>

                <div className="flex items-center gap-[10px] text-[#424242]">
                    <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-slate-400 transition-all duration-300">
                        <CgFacebook/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-slate-400 transition-all duration-300">
                        <BsTwitter/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-slate-400 transition-all duration-300">
                        <BsInstagram/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-slate-400 transition-all duration-300">
                        <BsLinkedin/>
                    </a>
                </div>
            </div>
        </footer>
    );

}
