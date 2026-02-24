import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FiUser } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function registerUser() {
    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    // Split full name
    const parts = name.trim().split(" ");
    const firstName = parts[0];
    const lastName = parts.slice(1).join(" ") || "NoLastName";

    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/users", {
        firstName,
        lastName,
        email,
        password,
      })
      .then(() => {
        toast.success("Account created successfully!");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to register");
      });
  }

  return (
    <div className="w-full h-screen bg-[url(./loginbg.jpg)] bg-cover bg-center flex justify-center items-center">
      <div className="w-[950px] min-h-[550px] bg-white flex rounded-[25px]">
        {/* Login Content - left side */}
        <div className="w-[440px] min-h-[550px] bg-white backdrop-blur-lg shadow-2xl rounded-[25px] p-8 flex flex-col items-center">

          <img 
            className="w-[140px] h-[50px] mb-3 object-cover cursor-pointer"
            src="/logo.png" 
            alt="Logo"
          />

          <h1 className="text-3xl font-bold mb-3 mt-6 text-black">Create Account</h1>
          <p className="text-black mb-12">
            Already have an account?{" "}
            <Link className="text-accent font-bold cursor-pointer" to="/login">
              Login
            </Link>
          </p>

          {/* Name */}
          <div className="w-full mb-5">
            <div className="flex items-center border-4 border-gray-400 focus-within:border-accent rounded-xl px-3 h-[45px] bg-white">
              <FiUser className="text-xl text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="w-full mb-5">
            <div className="flex items-center border-4 border-gray-400 focus-within:border-accent rounded-xl px-3 h-[45px] bg-white">
              <MdEmail className="text-xl text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="w-full mb-5">
            <div className="flex items-center border-4 border-gray-400 focus-within:border-accent rounded-xl px-3 h-[45px] bg-white">
              <RiLockPasswordLine className="text-xl text-gray-600 mr-2" />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none"
              />
            </div>
          </div>

          <button
            onClick={registerUser}
            className="w-full h-[45px] bg-accent rounded-xl text-white text-md font-medium mt-2 hover:bg-white border-2 hover:text-accent border-accent  transition-all duration-300 cursor-pointer"
          >
            Register
          </button>

        </div>
        
        {/* Right Side Image */}
        <div className="w-[510px] min-h-[550px] bg-[url(./registerAccount.png)] bg-cover bg-center rounded-tr-[25px] rounded-br-[25px] "></div>
      
      </div>
    </div>
  );
}
