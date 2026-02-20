import { useState } from "react";
import {
  BiCart,
  BiStore
} from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { MdContactMail, MdInfo, MdPersonAdd } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const token = localStorage.getItem("token");

  return (
    <header className="h-[100px] bg-white flex justify-center items-center fixed top-0 left-0 w-full z-[200] border-b border-muted">
      {/* ================= MOBILE OVERLAY ================= */}
      {isOpen && (
        <div className="fixed z-[100] top-0 right-0 w-[100vw] h-[100vh] bg-[#00000050]">
          <div className="h-full w-[350px] bg-white flex flex-col">
            <div className="w-full bg-accent h-[120px] flex pl-[45px] items-center gap-[20px]">
              <GiHamburgerMenu
                className="text-accent md:hidden text-4xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
              <img
                className="w-[180px] h-[80px] object-cover cursor-pointer"
                src="/logo.png"
                alt="Logo"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/");
                }}
              />
            </div>

            {/* ================= MOBILE LINKS ================= */}
            <div className="w-full h-full flex flex-col p-[45px] gap-[15px]">
              {[
                { to: "/", label: "Home", icon: <HiHome /> , end: true},
                { to: "/products", label: "Products", icon: <BiStore /> },
                { to: "/cart", label: "Cart", icon: <BiCart /> },
                { to: "/reviews", label: "Reviews", icon: <FaStar /> },
                { to: "/contact-us", label: "Contact Us", icon: <MdContactMail /> },
                { to: "/about-us", label: "About Us", icon: <MdInfo /> },
              ].map(({ to, label, icon, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-2xl transition-all
                     ${isActive ? "font-bold underline text-accent" : "text-accent"}`
                  }
                >
                  {icon}
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= LOGO ================= */}
      <img
        className="w-[170px] h-[80px] object-cover absolute left-3/7 md:left-[35px] cursor-pointer"
        src="/logo.png"
        alt="Logo"
        onClick={() => navigate("/")}
      />

      {/* ================= HAMBURGER ================= */}
      <GiHamburgerMenu
        className="text-black absolute md:hidden left-[40px] text-4xl cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      {/* ================= DESKTOP NAV ================= */}
      <div className="hidden md:flex items-center w-full max-w-[1400px] px-4">
        <nav className="flex items-center gap-6 ml-[280px] lg:ml-[320px]">
        {[
          { to: "/", label: "Home", end: true },
          { to: "/products", label: "Products" },
          { to: "/reviews", label: "Reviews" },
          { to: "/about-us", label: "About Us" },
          { to: "/contact-us", label: "Contact Us" },
        ].map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `relative text-sm lg:text-lg font-medium pb-1 transition-all
              ${
                isActive
                  ? "text-accent after:absolute after:left-0 after:-bottom-[6px] after:w-full after:h-[3px] after:bg-accent"
                  : "text-black hover:text-accent"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>


        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-2 lg:gap-4 ml-auto">
          <NavLink to="/cart">
            <BiCart className="text-accent text-2xl lg:text-3xl hover:scale-110 transition-transform" />
          </NavLink>

          {token ? (
            <button
              className="text-sm lg:text-lg flex items-center gap-2 bg-white text-accent px-4 py-2 rounded-full hover:bg-gray-200 transition-all"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              <FiLogOut />
              Logout
            </button>
          ) : (
            <button
              className="text-sm lg:text-lg flex items-center gap-2 bg-white text-accent px-4 py-2 rounded-full hover:bg-gray-200 transition-all"
              onClick={() => navigate("/login")}
            >
              <MdPersonAdd />
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
