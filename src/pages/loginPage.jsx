import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import { Link, useNavigate } from "react-router-dom";

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate() //useNavigate hook

    const googleLogin = useGoogleLogin({
        onSuccess: (response)=>{
            axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/google-Login",{
                token : response.access_token
            }).then( 
                (response)=>{
                    console.log(response.data)
                    localStorage.setItem("token",response.data.token)
                    toast.success("Login Successful")
                    if(response.data.role == "admin"){
                        navigate("/admin")
                    }else if(response.data.role == "user"){
                        navigate("/")
                    }
                }
            ).catch(
                ()=>{
                    toast.error("Google login failed")
                }
            )
        }
    })
    
    function login(){
        //console.log(email, password)
        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/login",{
            email: email,
            password : password
        }).then(
            (response)=>{
                console.log(response.data)
                localStorage.setItem("token", response.data.token) // token save to local storage

                toast.success("Login Successful")

                if(response.data.role == "admin"){
                      navigate("/admin/dashboard")  

                }else if (response.data.role == "user"){
                      navigate("/")
                    
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
                toast.error("Login failed")
            }
        )
    }
    

    return (
  <div className="w-full h-screen bg-[url(./loginbg.jpg)] bg-cover bg-center flex justify-center items-center">
    <div className="w-[950px] min-h-[550px] bg-white flex items-center justify-end rounded-[25px]">
      <div className="w-[510px] min-h-[550px] bg-[url(./LoginAvatar.png)] bg-cover bg-center rounded-tl-[25px] rounded-bl-[25px] "></div>
    <div className="w-[440px] min-h-[550px] bg-white backdrop-blur-lg shadow-2xl rounded-[25px] p-8 relative flex flex-col items-center">
    
      

      {/* Title */}
      <h1 className="text-3xl font-bold mb-3 mt-7 text-black">Welcome Back</h1>

      {/* Sign up link */}
      <p className="text-black mb-12">
        Don’t have an account yet?{" "}
        <Link className="text-accent font-bold " to="/register">
          Signup
        </Link>
      </p>

      {/* Email Input */}
      <div className="w-full mb-4">
        {/*<label className="text-black">Email Address</label> */}
        <div className="flex items-center border-4 border-gray-400 focus-within:border-accent rounded-xl px-3 h-[45px] bg-white ">
          <MdEmail className="text-xl text-gray-600 mr-2" />
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full outline-none"
            placeholder="Enter your email"
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="w-full mb-4">
         {/*<label className="text-black">Password</label> */}
        <div className="flex items-center border-4 border-gray-400 focus-within:border-accent rounded-xl px-3 h-[45px] bg-white">
          <RiLockPasswordLine className="text-xl text-gray-600 mr-2" />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none"
            placeholder="Enter your password"
          />
        </div>
      </div>

      {/* Login Button */}
      <button
        onClick={login}
        className="w-full h-[40px] bg-accent rounded-xl text-md font-medium text-white hover:bg-white hover:text-accent border-2 hover:border-accent  mt-2 transition-all duration-200 cursor-pointer"
      >
        Login
      </button>

      {/* OR */}
      <div className="flex items-center w-full my-4">
        <div className="flex-grow border-t border-gray-500"></div>
        <span className="mx-2 text-black text-md ">OR</span>
        <div className="flex-grow border-t border-gray-500"></div>
      </div>

      {/* Google Login */}
      <button
        onClick={googleLogin}
        className="w-full h-[40px] bg-gray-300 rounded-xl text-black  flex items-center justify-center gap-2 hover:bg-gray-400 transition-all duration-300 font-medium cursor-pointer"
      >
        <FcGoogle className="text-2xl" />
        Continue with Google
      </button>

      {/* Links */}
      <p className="mt-5 text-black font-light">
        Forget Password?{" "}
        <Link className="text-secondary font-semibold" to="/forget">
          Reset here
        </Link>
      </p>

    </div>
    </div>
  </div>
);

}